const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  heights: 1.69,
  calcBMI: function () {
      this.bmi = this.mass / this.heights ** 2;
      return this.bmi;
  }
}
const john = {
  fullName: 'John Smith',
  mass: 92,
  heights: 1.95,
  calcBMI: function () {
      this.bmi = this.mass / this.heights ** 2;
      return this.bmi;
  }
}
mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`)
} else {
  console.log(`${john.fullName}'s bmi (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`)
}