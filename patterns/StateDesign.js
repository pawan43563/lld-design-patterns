// Build a vending machine system that handles coin insertion, product selection, dispensing, and sold-out scenarios using internal states.


class State {
    insertCoin() {}
    selectProduct() {}
    dispense() {}
}

class IdleState extends State{
    constructor(machine) {
        super();
        this.machine = machine;
    }

    insertCoin() {
        console.log("💰 Coin inserted. Please select a product.");
        this.machine.setState(this.machine.hasMoneyState);
    }

    selectProduct() {
        console.log("❌ Insert coin first.");
    }

    dispense() {
       console.log("❌ Insert coin and select product first.");
    }
}

class HasMoneyState extends State {
    constructor(machine) {
        super();
        this.machine = machine;
    }
    insertCoin() {
        console.log("⚠️ Coin already inserted.");
    }

    selectProduct() {
      if (this.machine.inventory <= 0) {
        console.log("❌ Sold out!");
        this.machine.setState(this.machine.soldOutState);
      } else {
        console.log("✅ Product selected. Dispensing...");
        this.machine.setState(this.machine.dispensingState);
        this.machine.dispense();
      }
    }

    dispense() {
      console.log("❌ Select product first.");
    }
}

class DispensingState extends State {
    constructor(machine) {
        super();
        this.machine = machine;
    }
    insertCoin() {
      console.log("⏳ Please wait, dispensing in progress...");
    }
  
    selectProduct() {
      console.log("⏳ Dispensing in progress...");
    }
  
    dispense() {
      this.machine.inventory--;
      console.log(`🎁 Product dispensed. Items left: ${this.machine.inventory}`);
      if (this.machine.inventory > 0) {
        this.machine.setState(this.machine.idleState);
      } else {
        this.machine.setState(this.machine.soldOutState);
      }
    }
}


  class SoldOutState extends State {
    constructor(machine) {
      super();
      this.machine = machine;
    }
  
    insertCoin() {
      console.log("🚫 Cannot insert coin. Machine is sold out.");
    }
  
    selectProduct() {
      console.log("🚫 Cannot select product. Machine is sold out.");
    }
  
    dispense() {
      console.log("🚫 Cannot dispense. Machine is sold out.");
    }
  }

class VendingMachine {
    constructor() {
        this.idleState = new IdleState(this);
        this.hasMoneyState = new HasMoneyState(this);
        this.dispensingState = new DispensingState(this);
        this.soldOutState = new SoldOutState(this);
        this.state = this.idleState;
        this.inventory = 2;
    }
    
    setState(state) {
        this.state = state;
    }

    insertCoin() {
        this.state.insertCoin();
    }

    selectProduct() {
        this.state.selectProduct();
    }

    dispense() {
        this.state.dispense();
    }
}

const vm = new VendingMachine();
vm.insertCoin();      // Coin inserted
vm.selectProduct();   // Product selected and dispensed
vm.insertCoin();      // Coin inserted
vm.selectProduct();   // Product selected and dispensed
vm.insertCoin();      // Machine sold out
vm.selectProduct();   // Machine sold out