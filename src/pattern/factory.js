const factory = {
  init (type) {
    return this.product[type]()
  },
  product: {
    car () {
      console.log('make car')
      function Car (color) {
        this.type = 'car'
        this.color = color
      }
      return Car
    },
    moto () {
      console.log('make moto')
      function Moto (color) {
        this.type = 'moto'
        this.color = color
      }
      return Moto
    }
  }
}

const Car = factory.init('car')
const redCar = new Car('red')
const blueCar = new Car('blue')
console.log(redCar, blueCar)

const Moto = factory.init('moto')
const redMoto = new Moto('red')
console.log(redMoto)
