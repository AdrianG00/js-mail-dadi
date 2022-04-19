//Es. 2 Dice

let userDice = Math.floor(Math.random() * 6) + 1;
let computerDice = Math.floor(Math.random() * 6) + 1;
let result = '';

if (userDice > computerDice) {
    result = 'Hai vinto!';
} 
else if (userDice < computerDice) {
    result = 'Hai perso!';
} 
else {
    result = 'Pareggio!';
}

console.log(`Il tuo risultato: ${userDieRoll}; Il risultato del PC: ${computerDieRoll}`);
console.log(result);