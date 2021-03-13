class Ninja {
    constructor (ninjaName) {
        this.name = ninjaName;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName (){ 
        console.log(`Konichiwa. My name is ${this.name}.`);
    }
    showStats(){
        console.log(`Name: ${this.name}
Speed=${this.speed} Strength=${this.strength} Health=${this.health}`);
    }
    drinkSake(){
        this.health += 10;
    }
}
const gaiden = new Ninja("Ninja Gaiden");
gaiden.sayName();
gaiden.showStats();
gaiden.drinkSake();
gaiden.showStats();