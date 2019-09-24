// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/98#issuecomment-521922654

function outSleep(t) {
  return new Promise(r => {
    setTimeout(() => {
      console.log("");
      console.log(`...outSleep ${t}`);
      r();
    }, 1000 * t);
  });
}

function LazyMan(name) {
  const lazy = {
    _cbs: [],
    _timer: null,
    _init() {
      if (name) console.log(`Hi I am ${name}`);
      return this;
    },
    async _run() {
      console.log("");
      console.log(`===start`);
      console.log(this._cbs);
      console.log("");
      for (let i = 0; i < this._cbs.length; i++) {
        const fn = this._cbs[i];
        await fn();
      }
      return this;
    },
    eat(food) {
      this._cbs.push(function eat() {
        console.log(`I am eating ${food}`);
      });
      clearTimeout(this._timer);
      this._timer = setTimeout(() => {
        this._run();
      }, 0);
      return this;
    },
    sleep(t) {
      this._cbs.push(async function sleep() {
        await outSleep(t);
      });
      return this;
    },
    sleepFirst(t) {
      this._cbs.unshift(async function sleepFirst() {
        await outSleep(t);
      });
      return this;
    }
  };

  return lazy._init();
}

// LazyMan("Tony");
// Hi I am Tony

// LazyMan("Tony")
//   .sleep(1)
//   .eat("lunch");
// Hi I am Tony
// 等待了1秒...
// I am eating lunch

// LazyMan("Tony")
//   .eat("lunch")
//   .sleep(1);

// LazyMan("Tony")
//   .eat("lunch")
//   .sleep(1)
//   .eat("dinner");
// Hi I am Tony
// I am eating lunch
// 等待了1秒...
// I am eating diner

LazyMan("Tony")
  .eat("lunch")
  .eat("dinner")
  .sleepFirst(5)
  .sleep(1)
  .eat("junk food");
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了1秒...
// I am eating junk food
