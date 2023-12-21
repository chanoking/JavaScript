// const Car = function (model, speed) {
//   this.model = model;
//   this.speed = speed;
// };

// Car.prototype.accelator = function () {
//   this.speed += 10;
//   console.log(`${this.model} is going at ${this.speed}km/h`);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(`${this.model} is going at ${this.speed}km/h`);
// };

// const bmw = new Car("BMW", 120);
// console.log(bmw);
// const sonata = new Car("SONATA", 80);

// bmw.accelator();
// bmw.accelator();
// bmw.break();
// bmw.accelator();

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelator = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// const bmw = new Car("BMW", 120);

// bmw.accelator();
// bmw.accelator();
// bmw.break();
// bmw.accelator();

// const AirPlane = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// AirPlane.prototype.accelator = function () {
//   this.speed += 100;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// AirPlane.prototype.break = function () {
//   this.speed -= 50;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// const koreanAir = new AirPlane("KOREANAIR", 500);

// koreanAir.accelator();
// koreanAir.accelator();
// koreanAir.accelator();
// koreanAir.break();

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   convertSpeed() {
//     let convert = this.speed * 1.6;
//     console.log(`${this.make} is going at ${convert.toFixed(2)}`);
//   }
// }

// const ford = new Car("Ford", 98);

// ford.convertSpeed();

const Person = function (birthYear, name) {
  this.birthYear = birthYear;
  this.name = name;
};

Person.prototype.calAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (birthYear, name, course) {
  Person.call(this, birthYear, name);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(
    `${this.name}'s birthyear is ${this.birthYear} and study ${this.course}`
  );
};

const student1 = new Student(1994, "chano", "computer science");

student1.introduce();
student1.calAge();

// const Animal = function (type, age) {
//   this.type = type;
//   this.age = age;
// };

// const Dog = function (type, age, name) {
//   Animal.call(this, type, age);
//   this.name = name;
// };

// Dog.prototype.introduce = function () {
//   console.log(
//     `${this.name} is barking, and his age is ${this.age}, and his type is ${this.type}`
//   );
// };

// const koko = new Dog("Welshi", 5, "koko");

// koko.introduce();

// 1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
// 2. Make the 'charge' property private;
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

// DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
