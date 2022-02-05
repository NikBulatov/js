let number;
let attempts;

function resetGame() {
    attempts = 0;
    number = Math.floor(Math.random() * 100);
    console.log(number);
}

function tryGuessNumber() {
    const userNumber = +prompt('Input a number from 0 to 100, to exit input -1');
    if (userNumber === -1) return alert('Bye!');
    if (isNaN(userNumber)) {
        alert('Input a number from 0 to 100');
        tryGuessNumber();
        return;
    }
    attempts++;
    if (userNumber > number) alert('Input a number less');
    else if (userNumber < number) alert('Input a number greater');
    else {
        alert(`Congratulations! You guessed a number c ${attempts} attempts`);
        if (!confirm('Could you continue?')) return alert('Game Over!');
        resetGame();
    }
    tryGuessNumber();
}
resetGame()
tryGuessNumber()