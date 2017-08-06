/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
/*
alert("Hello World");
confirm("i love JS");
prompt("do you want to learn js?");
*/

/*var favoriteCar = prompt("what is your favorite car?");
if(favoriteCar==="santafe"){
    alert("santafe is great!");
}
else if (favoriteCar=== "i30"){
    alert("i30 is beautiful");
}
else{
    alert("Good Choice");
}
*/

alert("Zombie Apocalypse!!");
var weapon = prompt("You search around franticaly for a weapon. What do you choose? A bow and arrow,an exe,or a rubber chicken?");
var randomnumber = Math.round(Math.random());

alert("You attack the zombie with your" + " " + weapon);

if(randomnumber === 0){
    alert("The zombie bites you. You lose!!!");
}else if (randomnumber === 1){
    alert("You kill the zombie with your" + " " + weapon + ".You win!!!!");
}
