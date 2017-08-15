
/*
var major = prompt("What is your major?").toLowerCase();

switch(major){
    case "mathamatic":
     alert("your major is very hard & you have to be very smart to choosing this");
     break;
    case "experiance Sciences":
     alert("You must have very perseverance for this, wish you all the best");
      break; 
    default:
    alert("please enter a valid major"); 
      break;
}
*/
/*
for(var i = 1; i<=100 ; i++ ){
    if(i%3 === 0){
        if(i%5 == 0){
            console.log("fizzbuzz");
        }
        else{
        console.log("fizz");
    }
    }
    else if(i%5 === 0){
        console.log("buzz");
    }
    else{
    console.log(i);
}

}
*/
/*
function calculateArea(height,width,length){
    console.log(height * width * length)
}
calculateArea(10,5,20);
calculateArea(20,30,40);
*/

//zombies game

var beginningScenarios = ["You’re in your car traveling cross-country. Your car breaks down for some reason and you have no cell signal.",
"you’re on a main road, and if you are near a town. It will be easy to get help. But what if you’re in a remote area.",
"you live on the west coast of the USA or anywhere on earth within the ring of fire.",
];
function randomNumber(range){
  return  Math.round(Math.random()*range);
}

alert(beginningScenarios[ randomNumber(
    beginningScenarios.length -1)]);

var weaponList=["knife","cordage","baseball bat",
"rubber chicken"];

var weapon = weaponList [randomNumber (weaponList.length-1)];

alert("immediately you notice a zombie that close to you and grab a " + weapon + ".");

alert("Suddenly a zombie attack you ! You ready your "
+ weapon + "and advance towards the zombies. ");

var survival = randomNumber(2);

if(survival === 0){
    alert("The zombie bites you. You lose!!!");
}else if (survival > 0){
    alert("You kill the zombie with your" + " " + weapon + ".You win!!!!");
}
