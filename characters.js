class Characters {
  constructor(health, damage, mana) {
      this.health = health;
      this.damage = damage;
      this.mana = mana;
      this.status = "playing"; // Par défaut, le personnage est en train de jouer
  }

  takeDamage(damage) {
      this.health -= damage;
      if (this.health <= 0) {
          this.status = "Dead !";
      }
  }

  dealDamage(victim) {
      if (victim.status !== "Dead !") {
          victim.takeDamage(this.damage);
          this.mana += 20;
      }
  }
}

// Personnages
class Fighter extends Characters {
  constructor(name) {
      super(12, 4, 40);
      this.name = name;
  }

  darkVision(victim) {
      if (this.mana >= 20) {
          victim.takeDamage(5);
          this.mana -= 20;
      }
      console.log(`${this.name} attaque avec sa spéciale et lui inflige 5 de dégats. Il lui reste ${victim.health} points de vie.`);
  }
}

class Paladin extends Characters {
  constructor(name) {
      super(16, 3, 160);
      this.name = name;
  }

  healingLightning(victim) {
      if (this.mana >= 40) {
          victim.takeDamage(4);
          this.mana -= 40;
          this.health += 5;
      }
      console.log(`${this.name} attaque avec sa Lumière et lui inflige 4 de dégats. Il lui reste ${victim.health} points de vie.`);
  }
}

class Monk extends Characters {
  constructor(name) {
      super(8, 2, 200);
      this.name = name;
  }

  heal(victim) {
      if (this.mana >= 25) {
          victim.takeDamage(8);
          this.mana -= 25;
      }
      console.log(`${this.name} attaque avec son heal et lui rend 8 de vie. Il lui reste ${victim.health} points de vie.`);
  }
}

class Berzerker extends Characters {
  constructor(name) {
      super(8, 4, 0);
      this.name = name;
  }

  rage(victim) {
      if (this.mana >= 0) {
          this.damage += 1;
          this.health -= 1;
      }
      console.log(`${this.name} attaque avec son coup de poing et lui inflige ${this.damage} de dégats. Il lui reste ${victim.health} points de vie.`);
  }
}

class Assassin extends Characters {
  constructor(name) {
      super(6, 6, 20);
      this.name = name;
  }

  shadowHit(victim) {
      if (this.mana >= 20) {
          victim.takeDamage(7);
          if (victim.status !== "Dead !") {
              this.takeDamage(7);
              console.log(`${victim.name} n'est pas mort ! ${this.name} perd 7 points de vie !`);
          }
      }
  }
}

// Instanciation des personnages
const grace = new Fighter("Grace");
const ulder = new Paladin("Ulder");
const moana = new Monk("Moana");
const draven = new Berzerker("Draven");
const carl = new Assassin("Carl");