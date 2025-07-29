// Create a vehicle fallback handler that gracefully handles missing or unknown vehicle types.

class Vehicle {
    drive() {
        throw new Error("Must implement drive");
    }
}

class Mercedes extends Vehicle{
    drive() {
        console.info("Mercedes Drive");
    }
}

class NullObject extends Vehicle {
    drive() {
        console.info("Unknown Type")
    }
}

class VehicleFactory {
    static getVehicle(type) {
        switch(type) {
            case "mercedes": 
                return new Mercedes();
            default:
            return new NullObject();
        }
    }
}

const veh = VehicleFactory.getVehicle("mercedes");
veh.drive()