// create a function that console logs any argument given 
function display (content){
    console.log(content);
}


// create a function that takes a name(string) as a parameter
// and returns "hi my name is"parameter given


    


// display(name("itachi"));
// display(melee("Punch"));
// display(powers("powers"));
// display(katon("oof"));

//Object oriented programming
// - Incapsulation

// OOP Incapsulation: grouping all behavior inside an object
const ninja = {
    name(name){
     return "Hi, My name is " + name + ".";
},

    sharinga(ability){
     return "To become a ninja you must " + ability + ".";

},

    katon(style){
     return "Katon " + style + " Jutsu";
},

    melee(move){
     return "Using my dagger " + move + "in close combat";
 }
}
//display(ninja.name("itachi"));
//display(ninja.melee("Punch"));
//display(ninja.powers("powers"));
//display(ninja.katon("oof"));


//create a class for instantiating ninja's
// OOP Abstraction: hiding complexity

class Ninja { 
    constructor(name, ability,style, move){
     this.nameInsideNinja = name;
     this.ability     = ability;
     this.style        = style;
     this.move         = move;
   }

   name(){
    return "Hi, My name is " + this.nameInsideNinja + ".";
    }
  
   sharinga(){
    return "Using " + this.ability + "Sharinga";

    }

   Jutsu(){
    return "Katon " + this.style + " style Jutsu";
    }

   melee(){
    return "Using my dagger " + this.move + "in close combat";
    } 
}


// OOP inheritance: object inherit from classes

display(itachi.Jutsu())
display(itachi.name())
display(itachi.melee())
display(itachi.powers())

// OOP polymorphin override shared behavior from parents
class UchihaGod extends Ninja {
    constructor(name, ability, style, move){
        super(name, ability, style, move)
        this.village = "Hidden leaf"
    }

    combo(){
        return "Activate: " + super.sharinga() + "Combo with" + super.melee();
    }
}

let itachi = new UchihaGod("Itachi", "Magenko", "Fire", "Upside Down Knife Throw");

display(itachi.name())
display(itachi.village)
display(itachi.combo());