// Build a car engine startup system using battery, fuel pump, and ignition with a unified start interface.

class Battery {
    start() {
        console.info("Battery started");
    }
}

class Fuel {
    start() {
        console.info("Fuel started");
    }
}

class Ignition {
    start() {
        console.info("Ignition started");
    }
}

class Car {
    constructor(name) {
        this.name = name;
        this.battery = new Battery();
        this.fuel = new Fuel();
        this.ignition = new Ignition();
    }

    start() {
        this.battery.start();
        this.fuel.start();
        this.ignition.start();
    }
}


const car = new Car();
car.start();

