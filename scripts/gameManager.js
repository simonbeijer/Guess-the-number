// Generator is a tool for a bot to get answers
// each bot has to have own generator.
// Generator has function "getAnswer" with two params ("min", "max"),
// which returns a number between "min" and "max" parameters.
//
// example for bot:
// this.generator = new Generator();
// let answer = this.generator.getAnswer(8, 23);

class Gamemanager {

  counter;
  lowestNumber;
  highestNumber;
  snittpot;
  score;
  highscore = document.querySelector('.highscore-list');
  // time = 0;


  constructor() {
    this.counter = 0;
    this.lowestNumber = 1;
    this.highestNumber = 100;
  }

  getAnswer(min, max) {
    let low = 0;
    if (min != null && typeof min == "number") {
      low = min;
    }

    let high = 1000000;
    if (max != null && typeof max == "number") {
      high = max;
    }
    // returns a random number from "low" to "high"
    let result = low + Math.floor(Math.random() * (high - low));

    // never return negative value
    if (result < 0) {
      result = 0;
    }
    console.log(result);
    return result;
  }

  checkAnswer(result, answer) {
    let string;
    if (answer > 1 && answer < 100) {
      if (answer == result) {
        string = "Correct U bitch!";
        // gameOver = true;
      } else if (answer > result) {
        string = "Too High!";
      } else if (answer < result) {
        string = "Too Low!";
      }
    } else {
      string = "Invalid number! Choose a number between 1-100";
    }
    return string;
  }

  lowNumber(guess) {
    let test;
    test = parseInt(guess)
    console.log("GUESS highnumber() test", test)
    if (test > this.lowestNumber) {
      this.lowestNumber = test
    }

    console.log(this.lowestNumber);
    return this.lowestNumber;


  }


  highNumber(guess) {
    let test;
    test = parseInt(guess)
    console.log("GUESS highnumber() test", test)
    if (test < this.highestNumber) {
      this.highestNumber = test
    }
    console.log(this.highestNumber);

    return this.highestNumber;
  }


  saveTimeScore(time, counter) {

    this.snittpot = time / counter;

    this.score = Math.round((1248 * Math.pow(Math.E, (this.snittpot) / - 5) - 20) * (1 / counter));

    return this.score;
  }

  getscore() {
    return this.score;
  }


  saveLocalStorage(name, score) {
    localStorage.setItem(name, JSON.stringify(score));
    console.log(localStorage.getItem("Simon"));
    
    // if(this.score > localStorage.get(name)) {

    // }
  
  }

  getLocalStorage(){

    localStorage.getItem(name, JSON.parse(score))
  }

}



// test
// const generator = new Generator();
// let answer = generator.getAnswer();
// console.log(answer);

// answer = generator.getAnswer(55, null);
// console.log(answer);

// answer = generator.getAnswer(null, 90);
// console.log(answer);

// answer = generator.getAnswer(55, 2000);
// console.log(answer);

// answer = generator.getAnswer(1973, 1977);
// console.log(answer);

// answer = generator.getAnswer(7, 13);
// console.log(answer);
