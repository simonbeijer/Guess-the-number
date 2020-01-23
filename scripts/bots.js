class bots{
    difficulity;
    conversation;
    image;

    constructor(difficulity) {
        this.difficulity = difficulity;
    }

    checkTheNumber(number){
        if (this.difficulity == "easy") {

        let guessedNumber = Math.floor(Math.random() * 20) + 1;
        console.log(guessedNumber);
 

        if (number == guessedNumber) {
            console.log("you win");
        }

        else if (number < guessedNumber) {
            console.log("Too high");
            guessedNumber = Math.floor(Math.random() * guessedNumber) + 1;
        }

        else if (number > guessedNumber) {
            console.log("Too low");
            guessedNumber = Math.floor(Math.random() * 20) + guessedNumber;
        }
        console.log("guessed at " + guessedNumber);
        console.log("to reach " + number);
        }
        else if (this.difficulity == "hard") {

        }
    }
}

// easyBot = new bots("easy");
// easyBot.checkTheNumber(10);