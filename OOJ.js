// create a function that console logs any argument given 
function display (content){
    console.log(content);
}


// create a function that takes a name(string) as a parameter
// and returns "hi my name is"parameter given

function name(name){
    return "Hi, My name is " + name + ".";
}

display(name("Jimmy"));

// create 3 function that describe the powers of a ninja 
// you would like to create

function powers(power){
    return "To become a ninja you must " + power + ".";

}

function katon(style){
    return "Katon " + style + " Jutsu";
}

function melee(move){
    return "Using my dagger " + move + "in close combat";
}

display(name("itachi"));
display(melee("Punch"));
display(powers("powers"));
display(katon("oof"));