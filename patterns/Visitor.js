// Implement a room inspection and cleaning system where actions depend on room type and visitor role.


class RoomVisitor {
    visitBedroom(room) {}
    visitKitchen(room) {}
}
  

class Cleaner extends RoomVisitor {
    visitBedroom(room) {
      console.log(`Cleaning Bedroom: ${room.name} with ${room.beds} bed(s)`);
    }
  
    visitKitchen(room) {
      console.log(`Cleaning Kitchen: ${room.name} with ${room.appliances.length} appliances`);
    }
}
  

class Inspector extends RoomVisitor {
    visitBedroom(room) {
      console.log(`Inspecting Bedroom: ${room.name} for fire exit & ventilation`);
    }
  
    visitKitchen(room) {
      console.log(`Inspecting Kitchen: ${room.name} for gas leaks & hygiene`);
    }
}
  

class Room {
    accept() {
      throw new Error("Must implement accept()");
    }
}
  

class Bedroom extends Room {
    constructor(name, beds) {
      super();
      this.name = name;
      this.beds = beds;
    }
  
    accept(visitor) {
      visitor.visitBedroom(this);
    }
}
  
class Kitchen extends Room {
    constructor(name, appliances = []) {
      super();
      this.name = name;
      this.appliances = appliances;
    }
  
    accept(visitor) {
      visitor.visitKitchen(this);
    }
}
  

const rooms = [
    new Bedroom("Master Bedroom", 1),
    new Bedroom("Guest Room", 2),
    new Kitchen("Main Kitchen", ["Oven", "Fridge", "Microwave"])
];
  
const cleaner = new Cleaner();
const inspector = new Inspector();
  
console.log("Cleaning Pass:");
rooms.forEach(room => room.accept(cleaner));
  
console.log("\nInspection Pass:");
rooms.forEach(room => room.accept(inspector));
  