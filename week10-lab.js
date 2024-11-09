// Challenge#1
console.log("Q1.");

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(
    `The ${this.make} increased the speed by 10km/h and is currently going at ${this.speed} km/h`
  );
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(
    `The ${this.make} decreased the speed by 5km/h and is currently going at ${this.speed} km/h`
  );
};

car1 = new Car("BMW", 120);
car2 = new Car("Mercedes", 95);

car1.accelerate();
car1.accelerate();
car1.brake();

car2.brake();
car2.brake();
car2.accelerate();

// Challenge#2
console.log("\nQ2.");

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(
      `${this.make} increased the speed by 10km/h and is currently going at ${this.speed} km/h`
    );
  }

  brake() {
    this.speed -= 5;
    console.log(
      `${this.make} decreased the speed by 5km/h and is currently going at ${this.speed} km/h`
    );
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

car3 = new CarCl("Ford", 120);

car3.accelerate();

car3.speedUS = 90;

console.log(
  `${car3.make} is currently going at ${car3.speed} km/h (${car3.speedUS} mi/h)`
);

car3.accelerate();

car3.brake();

// Challenge#3
console.log("\nQ3.");

function EV(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make} charged battery to ${chargeTo}%`);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

car4 = new EV("Tesla", 120, 23);

car4.chargeBattery(90);

car4.accelerate();
