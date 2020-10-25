interface Logger {
  time: number
  asyncLog: (msg: string) => Promise<string>
  syncLog: (msg: string) => number
}

type FilterTypes<T, U> = {
  [k in keyof T]: T[k] extends U ? k : never
}

type FilterKeys<T, U> = FilterTypes<T, U>[keyof T]

type SubType<T, U> = Pick<T, FilterKeys<T, U>>

type ArgAsReturn<T> = {
  [k in keyof T]: T[k] extends (arg: infer U) => any ? (arg: U) => U : never
}

/**
type T0 = {
    time: never;
    asyncLog: "asyncLog";
    syncLog: "syncLog";
}
 */
type T0 = FilterTypes<Logger, Function>

/**
type T1 = "asyncLog" | "syncLog"
 */
type T1 = FilterKeys<Logger, Function>

/**
type T3 = {
    asyncLog: (msg: string) => Promise<string>;
    syncLog: (msg: string) => number;
}
 */
type T3 = SubType<Logger, Function>

/**
type T4 = {
    asyncLog: (arg: string) => string;
    syncLog: (arg: string) => string;
}
 */
type T4 = ArgAsReturn<T3>

/** 你需要实现的部分 **/
type Translate<T> = ArgAsReturn<SubType<Logger, Function>>

// 要求 Translate
//  1. 提取出为函数类型的属性，丢弃掉其它类型的属性
//  2. 将函数返回类型调整为形参类型(假定有且只有一个参数)

// 实现效果如下:
/**
 // 等价于
 type T0 = {
   // 其它属性被丢弃
   asyncLog: (arg: string) => string // return 类型被调整为跟 arg 保持一致
   syncLog: (arg: string) => string // return 类型被调整为跟 arg 保持一致
 }
 */
type T5 = Translate<Logger>

const result: T5 = {
  syncLog(msg: string) {
    return msg
  },
  asyncLog(msg: string) {
    return msg
  },
}
