import 'reflect-metadata'

class Test {
  public static classMethod() {}
  public instanceMethod() {}
}

const obj = new Test()

Reflect.defineMetadata('meta', 'class', Test) // 给类添加元数据
Reflect.defineMetadata('meta', 'class method', Test, 'classMethod') // 给类的方法添加元数据
Reflect.defineMetadata('meta', 'instance', obj) // 给实例添加元数据
Reflect.defineMetadata('meta', 'instance method', obj, 'instanceMethod') // 给实例的方法添加元数据

console.log(Reflect.getMetadata('meta', Test)) // class
console.log(Reflect.getMetadata('meta', Test, 'classMethod')) // class method
console.log(Reflect.getMetadata('meta', obj)) // instance
console.log(Reflect.getMetadata('meta', obj, 'instanceMethod')) // instance method
