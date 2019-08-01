function isFunction(o) {
  return typeof o === "function";
}

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(fn) {
    this.status = PENDING;
    this.value = null;

    this.resolve = resolve.bind(this);
    this.reject = reject.bind(this);

    this.resolveCallbacks = [];
    this.rejectCallbacks = [];

    fn(this.resolve, this.reject);
  }

  then(onFulfilled, onRejected) {
    let promise2 = null;
    if (this.status === PENDING) {
      return (promise2 = new MyPromise((resolve, reject) => {
        this.resolveCallbacks.push(() => {
          try {
            const x = onFulfilled(this.value);
            resolutionProcedure(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });

        this.rejectCallbacks.push(() => {
          try {
            const x = onRejected(this.value);
            resolutionProcedure(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      }));
    }

    if (this.status === FULFILLED) {
      return (promise2 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolutionProcedure(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      }));
    }

    if (this.status === REJECTED) {
      return (promise2 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            const x = onRejected(this.value);
            resolutionProcedure(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      }));
    }

    // onFulfilled = isFunction(onFulfilled) ? onFulfilled : v => v
    // onRejected = isFunction(onRejected) ? onRejected : v => {
    //   throw v
    // }

    // if (this.status === PENDING) {
    //   this.resolveCallbacks.push(onFulfilled)
    //   this.rejectCallbacks.push(onRejected)
    // }

    // if (this.status === FULFILLED) {
    //   onFulfilled(this.value)
    // }

    // if (this.status === REJECTED) {
    //   onRejected(this.value)
    // }
  }

  finally(callback) {
    let P = this.constructor;
    return this.then(
      value => P.resolve(callback()).then(() => value),
      reason =>
        P.resolve(callback()).then(() => {
          throw reason;
        })
    );
  }
}

function resolve(value) {
  if (value instanceof MyPromise) {
    return value.then(resolve, reject);
  }

  setTimeout(() => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      this.resolveCallbacks.forEach(cb => {
        cb(value);
      });
    }
  }, 0);
}

function reject(value) {
  setTimeout(() => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.value = value;
      this.rejectCallbacks.forEach(cb => {
        cb(value);
      });
    }
  }, 0);
}

function resolutionProcedure(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError("Error"));
  }

  if (x instanceof MyPromise) {
    x.then(function(value) {
      resolutionProcedure(promise2, value, resolve, reject);
    }, reject);
  }

  let called = false;
  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          y => {
            if (called) return;
            called = true;
            resolutionProcedure(promise2, y, resolve, reject);
          },
          e => {
            if (called) return;
            called = true;
            reject(e);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

/**
 * test
 */
const mp = new MyPromise((resolve, reject) => {
  console.log("MyPromise start");
  setTimeout(() => {
    console.log("resolve");
    // resolve(1);
    reject(1);
  }, 1000);
}).then(
  res => {
    console.log("then 1");
    console.log("res", res);
    return 2;
  },
  e => {
    console.log("err", e);
    throw e;
  }
)
.then(res => {
  console.log("then 2");
  console.log(res);
  throw "4";
})
.then(res => {
  console.log("then 3");
  console.log(res);
  return 2;
})
// .catch(res => {
//   console.log("catch");
//   console.log(res);
//   return "catch return";
// })
.then(res => {
  console.log("then 4");
  console.log(res);
})
.finally(() => {
  console.log("finally");
});
