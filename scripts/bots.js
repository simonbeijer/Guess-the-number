class bots{
    difficulity;
    conversation;
    image;

    constructor(difficulity) {
        this.difficulity = difficulity;
    }

    checkTheNumber(number, highestNumber){
        if (this.difficulity == "easy") {

        let guessedNumber = Math.floor(Math.random() * highestNumber) + 1;
        console.log(guessedNumber);

        let forwardsOrBackwards = Math.floor(Math.random() * 3);
 

        if (number == guessedNumber) {
            console.log("you win");
        }

        else if (number < guessedNumber) {
            console.log("Too high");
            if (forwardsOrBackwards != 0) {
                let randomForwardNumber = Math.floor(Math.random() * 3) + 1;
                guessedNumber = guessedNumber - randomForwardNumber
            }
            else {
                let randomForwardNumber = Math.floor(Math.random() * 3) + 1;
                guessedNumber = guessedNumber + randomForwardNumber
            }
        }

        else if (number > guessedNumber) {
            console.log("Too low");
            if (forwardsOrBackwards != 0) {
                let randomForwardNumber = Math.floor(Math.random() * 3) + 1;
                guessedNumber = guessedNumber + randomForwardNumber
            }
            else{
                let randomForwardNumber = Math.floor(Math.random() * 3) + 1;
                guessedNumber = guessedNumber - randomForwardNumber
            }
        }
        console.log("easy guessed at " + guessedNumber);
        console.log("easy to reach " + number);
        }
        else if (this.difficulity == "hard") {

            let guessedNumber = 10;
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
                guessedNumber =  Math.floor(Math.random() * (highestNumber - guessedNumber + 1) + guessedNumber);
               
            }
            console.log("hard guessed at " + guessedNumber);
            console.log("hard to reach " + number);

        }
    }
}

easyBot = new bots("easy");
easyBot.checkTheNumber(13,20);

hardBot = new bots("hard");
hardBot.checkTheNumber(13,20);