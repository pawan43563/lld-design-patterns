// Design an ATM system that dispenses ₹2000, ₹500, and ₹100 notes based on requested amount.

class MachineHandler {
    setNext(nextHandler) {
        this.nextHandler = nextHandler;
        return nextHandler;
    }

    calculate(amount) {
        if(this.nextHandler) {
            return this.nextHandler.calculate(amount);
        }
    }
}

class Machine2000 extends MachineHandler {

    calculate(amount) {
        const count = Math.floor(amount / 2000);
        const remaining = amount % 2000;
        console.info(`2000 notes ${count}`);
        super.calculate(remaining); // This we are directly using MachineHandler to go to next instead of checking null and calling on every machine type
    }
}

class Machine500 extends MachineHandler { 

    calculate(amount) {
        const count = Math.floor(amount / 500);
        const remaining = amount % 500;
        console.info(`500 notes ${count}`);
        super.calculate(remaining);
    }
}

class Machine100 extends MachineHandler {

    calculate(amount) {
        const count = Math.floor(amount / 100);
        const remaining = amount % 100;
        console.info(`100 notes ${count}`);
        super.calculate(remaining);
    }
}

const handler2000 = new Machine2000();
const handler500 = new Machine500();
const handler100 = new Machine100();

handler2000.setNext(handler500).setNext(handler100);

handler2000.calculate(5100);



// Q. Try handling if machine is not able to dispense the amount for ex. 510


