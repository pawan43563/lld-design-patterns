// Create a vehicle factory that returns either a luxury or ordinary vehicle depending on type.

class Vehicle {
    drive() {
        throw new Error("Method drive() must be implemented");
    }
}

class Mercedes extends Vehicle {
    drive() {
        console.info("Driving Mercedes - Luxury at its finest");
    }
}

class BMW extends Vehicle {
    drive() {
        console.info("Driving BMW - The ultimate driving machine");
    }
}

class Maruti extends Vehicle {
    drive() {
        console.info("Driving Maruti - Efficiency and reliability");
    }
}

class LuxuryFactory {
    static createVehicle(car) {
        switch(car.toUpperCase()) {
            case "BMW": 
                return new BMW();
            case "MERCEDES":
                return new Mercedes();
            default:
                throw new Error(`Unknown luxury car type: ${car}`);
        }
    }
}

class NormalFactory {
    static createVehicle(car) {
        switch(car.toUpperCase()) {
            case "MARUTI": 
                return new Maruti();
            default:
                throw new Error(`Unknown normal car type: ${car}`);
        }
    }
}

class VehicleFactory {
    static createFactory(type) {
        switch(type.toUpperCase()) {
            case "LUXURY": 
                return LuxuryFactory;
            case "NORMAL":
                return NormalFactory;
            default:
                throw new Error(`Unknown factory type: ${type}`);
        }
    }
}

// Create a luxury car (BMW)
const bmw = VehicleFactory.createFactory("Luxury").createVehicle("BMW");
bmw.drive(); 

// Create a normal car (Maruti)
const maruti = VehicleFactory.createFactory("Normal").createVehicle("Maruti");
maruti.drive(); 