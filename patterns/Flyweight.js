// Optimize memory usage by sharing robot type instances (e.g., model, weapon) across multiple robot objects.


class RobotType {
  constructor(type, weapon, model) {
    this.type = type;
    this.weapon = weapon;
    this.model = model;
  }

  render(x, y) {
    console.log(`[${this.type}] Model: ${this.model} | Weapon: ${this.weapon} at (${x}, ${y})`);
  }
}

class RobotFactory {
  static robotTypes = new Map();

  static getRobotType(type, weapon, model) {
    const key = `${type}_${weapon}_${model}`;
    if (!this.robotTypes.has(key)) {
      this.robotTypes.set(key, new RobotType(type, weapon, model));
    }
    return this.robotTypes.get(key);
  }
}

class Robot {
  constructor(x, y, robotType) {
    this.x = x;
    this.y = y;
    this.robotType = robotType;
  }

  render() {
    this.robotType.render(this.x, this.y);
  }
}


const robots = [];
robots.push(new Robot(1, 2, RobotFactory.getRobotType("FlyRobot", "Laser", "AeroX")));
robots.push(new Robot(3, 4, RobotFactory.getRobotType("FlyRobot", "Laser", "AeroX"))); 
robots.push(new Robot(5, 6, RobotFactory.getRobotType("LandRobot", "Missile", "TankRex")));

robots.forEach(robot => robot.render());