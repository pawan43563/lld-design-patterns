// Create a pizza ordering system where users can add multiple toppings dynamically without subclass explosion.

// Base Pizza interface
class Pizza {
    cost() {
        return 100; // Base pizza cost
    }

    getDescription() {
        return "Basic Pizza";
    }
}

// Base decorator class
class PizzaDecorator extends Pizza {
    constructor(pizza) {
        super();
        this.pizza = pizza;
    }

    cost() {
        return this.pizza.cost();
    }

    getDescription() {
        return this.pizza.getDescription();
    }
}

// Concrete decorators
class Cheese extends PizzaDecorator {

    cost() {
        return this.pizza.cost() + 30;
    }

    getDescription() {
        return this.pizza.getDescription() + ", Cheese";
    }
}

class Tomato extends PizzaDecorator {

    cost() {
        return this.pizza.cost() + 20;
    }

    getDescription() {
        return this.pizza.getDescription() + ", Tomato";
    }
}

const pizza = new Tomato(new Cheese(new Pizza()));
console.log(pizza.getDescription());
console.log(pizza.cost()); 