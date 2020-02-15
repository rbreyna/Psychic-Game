
var chars="abcdefghijklmnopqrstuvwxyz";
var computerLetter = chars[Math.floor(Math.random()*chars.length)];
console.log(computerLetter);

//Declaring variables
var letterGuess = "";
var wins = 0;
var losses = 0;
var attemptsLeft = 9;
var guesses = [];

//Function to set a new random character
function newGame(){
    guesses=[];
    attemptsLeft = 9;
    var chars="abcdefghijklmnopqrstuvwxyz";
    var computerLetter = chars[Math.floor(Math.random()*chars.length)];
    console.log(computerLetter);
    document.getElementById("guesses").innerText = guesses;
};

var button = document.getElementById("resetGame");
document

document.onkeyup = function(event){
    //store keystroke for comparison
    letterGuess = event.key.toUpperCase();
    
    
    if(guesses.indexOf(letterGuess) != -1){  //verify that a letter hasn't been guessed already
        alert("That letter was already guesses! Guess another letter.");
    } else {
        guesses.push(letterGuess);
        document.getElementById("guesses").innerText = guesses.join(", ");

        if(letterGuess === computerLetter)
        {
            alert("You've guessed correctly!");
            alert("The correct letter was: " + letterGuess.toUpperCase());
            wins++;
            document.getElementById("winTotal").innerHTML = wins;
            newGame();
            guesses=[];
        } else {
            if(attemptsLeft === 0){
                alert("You've lost!");
                alert("The correct letter was: " + letterGuess.toUpperCase());
                losses++;
                newGame();
                guesses=[];
                document.getElementById("lossTotal").innerHTML = losses;
            }
            else{
                attemptsLeft--; 
            };
        };
        
    };


}