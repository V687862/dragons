class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons) {
    return dragons.map(dragon => dragon.name)
  }
}

const toothless = new Dragon("Toothless", "black");
console.log(toothless);
console.log(toothless.breathesFire());

console.log(Dragon.getDragons(toothless));


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}