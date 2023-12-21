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

const AirPlane = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

AirPlane.prototype.accelator = function () {
  this.speed += 100;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

AirPlane.prototype.break = function () {
  this.speed -= 50;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const koreanAir = new AirPlane("KOREANAIR", 500);

koreanAir.accelator();
koreanAir.accelator();
koreanAir.accelator();
koreanAir.break();
