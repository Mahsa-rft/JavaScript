/*jslint devel:true*/
/*
var myMilkshake = {
 chocolate: true,
 ounses:100,
 milk:true,
 snickers:true,
 sugar:"alot",

 addsugar: function(){
     if(myMilkshake.sugar === "little"){
         myMilkshake.sugar = "alot";
         alert("Your milkshake sugar is good now!");
     }
 }
};

myMilkshake.sugar = "little";

myMilkshake.addsugar();

*/
/*
function BestFriend(name,age){
    this.name=name;
    this.age=age;
}
var kimia= new BestFriend("Kimia",19);
var parisa=new BestFriend("parisa,",19);

alert(kimia.name);
alert(kimia.age);
*/

var outcome;

alert("One day you wake up and the world as you know has ended. The dead come to life and prey on the living. There is no hope, no cure, only survival. Welcome to the zombie apocalypse.");
var Scenarios = ["You wake up in a hospital, It is early quiet. You tiptoe to the door and peek out.", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "Desperate times call for desperate measures. You see a small convenience story up ahead and decide to loot it for goods."];


function randomNumber(range) {
    "use strict";
    if (typeof range === "number") {
        return Math.round(Math.random() * range);
    }
}

alert(Scenarios[randomNumber(Scenarios.length - 1)]);

var character = {
    health: 5,
    strength: 0,
    stealth: 0,
    name: prompt("What is your name?"),
    characterClass: prompt("What were you before the war? (choose from: soldier, doctor, or prime)").toLowerCase()
};

if (!character.name) {
    character.name = prompt("I don't know what to call you if you don't enter a name. If you don't answer I will be forced to name you myself...Last chanse. What is your name?");
    if (!character.name) {
        alert("Well,I call you Gunther Piddles");
        character.name = "Gunther Piddles";
    }
}

if (character.characterClass === "soldier") {
    character.strength = 5;
}
if (character.characterClass === "prime") {
    character.stealth = 5;
}
if (character.characterClass === "doctor") {
    character.health = 10;
}

var choice = prompt("The brave adventurer and former " + character.characterClass + " " + character.name + "enters a store for some loot. You notice a zombie slowly shuffling around amongst the destruction. What action shall you take? Attack, or attempt to sneak by the zombie?").toLowerCase();
var weapon = prompt("And which weapon do you take?choose from:gun,knife,collette,stave").toLowerCase();

if (choice === "attack") {
    if (character.strength === 5) {
        alert("You are using your" + weapon + " and you success!!");
        outcome = "Win!!";
        character.strength++;
    } else if (character.strength <= 5) {
        alert("You are immediately bitten by the Zombie and die.The end.");
        outcome = "lose";
    }
}

if (choice === "sneak" || choice === "sneak by the zombie") {
    if (character.stealth === 5) {
        alert("You sneak by the zombie, you clever bastard.");
    }
    if (character.stealth < 5) {
        alert("good try,but it slowly turns its head and shuffles towards you.");
        if (character.strength === 5) {
            alert("Although you have alerted the zombie yo your presence you are able to crush its skull with your " + weapon + ".");
            outcome = "Win";
        } else {
            alert("the zombie aware of you!!");
            outcome = "lose";
        }
    }
}

if (outcome === "lose") {
    alert("You lose!");
} else if (outcome === "win") {
    alert("You win!");
}