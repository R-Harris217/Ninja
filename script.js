class Ninja {
    constructor (ninjaName, health, speed = 3, strength = 3) {
        this.name = ninjaName;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
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
const gaiden = new Ninja("Ninja Gaiden", 1000);
gaiden.sayName();
gaiden.showStats();
gaiden.drinkSake();
gaiden.showStats();

class Sensei extends Ninja {
    constructor(wisdom) {
        super("Jo Hayabusa", 200, 10, 10, wisdom = 10)
        this.wisdom = wisdom;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("The first priority to the ninja is to win without fighting.")
    }
}
const jo = new Sensei("Jo Hayabusa")
jo.speakWisdom();
jo.showStats();
console.log(jo);