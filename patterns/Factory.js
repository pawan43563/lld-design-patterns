// Create a shape factory that returns different shapes based on input.

// Shape interface/base class
class Shape {
    draw() {
        throw new Error('Method draw() must be implemented');
    }
}

class Box extends Shape {
    draw() {
        console.log("Drawing a Box");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a Circle");
    }
}

class ShapeFactory {
    static create(shapeType) {
        switch(shapeType) {
            case "BOX": 
                return new Box();
            case "CIRCLE":
                return new Circle();
            default:
                console.info("Unknown Shape");
        }
    }
}

const box = ShapeFactory.create("BOX");
box.draw()


// Questions?
// Think of passing width and height based on shape 