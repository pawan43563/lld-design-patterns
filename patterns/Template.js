// Implement a beverage preparation system where the general flow remains the same but brewing and condiments vary.

class Beverages {
    
    prepare() {
        this.boilWater();
        this.brewing();
        this.condiment();
        this.done();
    }

    boilWater() {
        console.info("boil started");
    }

    brewing() {
        throw new Error("This should be implemented")
    }

    condiment() {
        throw new Error("This should be implemented")
    }

    done() {
        console.log("Done");
    }
}

class Tea extends Beverages {
    brewing() {
        console.log("Tea Brewing");
    }

    condiment() {
        console.log("Tea Brewing");
    }
}

class Coffee extends Beverages {
    brewing() {
        console.log("Brewing");
    }

    condiment() {
        console.log("Coffee Brewing");
    }
}

const tea = new Tea();
tea.prepare()