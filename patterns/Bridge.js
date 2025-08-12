
// Implement breathing behavior for different living beings like fish, humans, and trees, which share a common interface but have varying implementations.

class Breathing {
    breathe() {
      throw new Error("Must implement breathe()");
    }
  }
  
  class Gills extends Breathing {
    breathe() {
      console.log("🐟 Breathing through gills (underwater)");
    }
  }
  
  class Lungs extends Breathing {
    breathe() {
      console.log("👤 Breathing through lungs (air)");
    }
  }
  
  class Stomata extends Breathing {
    breathe() {
      console.log("🌳 Breathing through stomata (leaves)");
    }
  }
  

  class LivingThing {
    constructor(name, breathingType) {
      this.name = name;
      this.breathingType = breathingType;
    }
  
    breathe() {
      console.log(`${this.name} is breathing:`);
      this.breathingType.breathe();
    }
  }

  const fish = new LivingThing("Fish", new Gills());
  const human = new LivingThing("Human", new Lungs());
  const tree = new LivingThing("Tree", new Stomata());
  
  fish.breathe();
  human.breathe();
  tree.breathe();