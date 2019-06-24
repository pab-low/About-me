function display(content){
    console.log(content)
}

const pablo = {
    name(name){
        return "Hi, My name is " + name + ".";
   },
   
       age(age){
        return "I am " + age + " yaers old.";
   
   },
   
       Born(place){
        return "I was born in" + place + "in September 7, 2003";
   },
   
       skill(sin){
        return "I am" + sin + ".";
    }
}


class Pablo { 
    constructor(name, age, place, sin){
     this.nameInsideNinja = name;
     this.age     = age;
     this.place   = place;
     this.sin     = sin;
   }

   name(){
    return "Hi, My name is " + this.nameInsideNinja + ".";
    }
  
   age(){
    return "I am" + this.age + "years old";

    }

   Born(){
    return "I was born in " + this.place + " in September 7, 2003";
    }

   skill(){
    return "I am " + this.sin + ".";
    } 
}

display(pablo.name("Pablo"));
display(pablo.age(15));
display(pablo.Born("Dallas, Texas"));
display(pablo.skill("Adobe illustrator 2015 cc"));


// define function

// define parent




//child class
//intantiate yourself from the child class

class MyParents extends Pablo {
    constructor(name, age, place, sin){
        super(name, age, place, sin)
        this.person = "Dallas, Texas"
    }

    inherent(){
        return "I got my fathers eyes and his name";
    }
}

let pablojr = new MyParents("pablo", 15, "Dallas, Texes", "Adobe illustrator 2015 cc");


display(pablojr.person)
display(pablojr.inherent());