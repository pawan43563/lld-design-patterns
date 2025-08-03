
// Design a remote control system that supports ON/OFF operations for devices, along with undo/redo capabilities.


class Light {
    turnOn() {
        console.info("Lights Turn On")
    }

    turnOff() {
        console.info("Lights Turn Off");
    }
}

class Command {
    execute() {
        throw new Error("Implement Execute")
    }
    undo() {
        throw new Error("Implement undo")
    }
    redo() {
        throw new Error("Implement redo")
    }
}

class TurnOnCommand extends Command {
    constructor(light) {
        super()
        this.light = light;
    }


    execute() {
        this.light.turnOn();
    }

    undo() {
        this.light.turnOff();
    }

    redo() {
        this.light.turnOn();
    }
}

class TurnOffCommand extends Command {
    constructor(light) {
        super()
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }

    undo() {
        this.light.turnOn();
    }

    redo() {
        this.light.turnOff();
    }
}


// Invoker
class RemoteController {
    setCommand(command) {
        this.command = command;
    }

    execute() {
        this.command.execute();
        this.last_command_execute = this.command;
    }

    undo() { if(this.last_command_execute) this.last_command_execute.undo() };

    redo() { if(this.last_command_execute) this.last_command_execute.redo() };
}

const light = new Light();

const LightsOn = new TurnOnCommand(light);
const LightsOff = new TurnOffCommand(light);
const remote = new RemoteController();
remote.setCommand(LightsOn);
remote.execute()
remote.undo()
remote.redo()

// Add Logic for Fan On and set speed 

