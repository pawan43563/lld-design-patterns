// Build a simple arithmetic interpreter to evaluate expressions like 3 + 5 and 2 * (3 + 4)

class Expression {
    interpret() {
        throw new Error("Implement this");
    }
}

class NumberExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }

    interpret() {
        return this.value;
    }
}

class MultiplyExpression extends Expression {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }

    interpret() {
        return this.left.interpret() * this.right.interpret();
    }
}

class AdditionExpression extends Expression {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }

    interpret() {
        return this.left.interpret() + this.right.interpret();
    }
}

const value = new AdditionExpression(
    new NumberExpression(100),
    new MultiplyExpression(new NumberExpression(10), new NumberExpression(20))
)

console.info(value.interpret())