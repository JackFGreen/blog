// https://juejin.im/post/5aa7868b6fb9a028dd4de672

function isFunction(o) {
  return typeof o === "function";
}

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(handler) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.fulfilledCbs = [];
    this.rejectedCbs = [];

    handler(resolve.bind(this), reject.bind(this));

    function resolve(value) {
      this.status = FULFILLED;
      this.value = value;
      this.fulfilledCbs.forEach(cb => cb(this.value));
    }
    function reject(reason) {
      this.status = REJECTED;
      this.reason = reason;
      this.rejectedCbs.forEach(cb => cb(this.reason));
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = isFunction(onFulfilled) ? onFulfilled : value => value;
    onRejected = isFunction(onRejected) ? onRejected : reason => reason;

    if (this.status === FULFILLED) {
      return new MyPromise((resolve, reject) => {
        const result = onFulfilled(this.value);
        resolve(result);
      });
    }
    if (this.status === REJECTED) {
      return new MyPromise((resolve, reject) => {
        const result = onRejected(this.reason);
        reject(result);
      });
    }
    if (this.status === PENDING) {
      return new MyPromise((resolve, reject) => {
        this.fulfilledCbs.push(() => {
          const result = onFulfilled(this.value);
          resolve(result);
        });
        this.rejectedCbs.push(() => {
          const result = onRejected(this.reason);
          reject(result);
        });
      });
    }
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  finally(handler) {
    return this.then(
      res => {
        handler();
      },
      err => {
        handler();
      }
    );
  }
}

new MyPromise((resolve, reject) => {
  console.log("promise start...");
  setTimeout(() => {
    resolve("setTimeout resolve...");
    // reject("setTimeout reject...");
  }, 1000);
})
  .then(
    res => {
      console.log("then1", res);
      return "from then1";
    },
    err => {
      console.log("err1", err);
      return "from err1";
    }
  )
  .then(res => {
    console.log("then2", res);
  })
  .catch(err => {
    console.log("err2", err);
  })
  .finally(() => {
    console.log("finally");
  });
