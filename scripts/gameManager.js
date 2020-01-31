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
    if (test > this.lowestNumber) {
      this.lowestNumber = test
    }
    return this.lowestNumber;


  }


  highNumber(guess) {
    let test;
    test = parseInt(guess)
    if (test < this.highestNumber) {
      this.highestNumber = test
    }
    return this.highestNumber;
  }


  saveTimeScore(time, counter) {

    this.snittpot = time / counter;

    this.score = Math.round((1248 * Math.pow(Math.E, (this.snittpot) / - 5) - 20) * (1 / counter));

    return this.score;
  }

  resetMpGame(playerNames) {    
    let multiplayergame = new Multiplayergame(playerNames); 
    multiplayergame.newGame();
  }
  resetSpGame(players) {    
    let singleplayergame = new Singleplayergame(players);
    singleplayergame.newGame();
  }


  // saveLocalStorage(score) {
  //   let number;
  //   number = localStorage.length + 1;
  //   localStorage.setItem(number, JSON.stringify(score));

  // }

  // getLocalStorage() {
  //   let theArray = [];
  //   for (var i = 0; i < localStorage.length; i++){
  //     theArray.push(localStorage.getItem(localStorage.key(i)));
  //   }
  //   console.log("array", theArray);

  // return theArray.sort();
  // //   if(localStorage.name){
  // //     alert("Welcome " + localStorage.name)
  // // }
  // // this.highscore.innerHTML = this.getscore();

  //   // document.querySelector(".highscore-list").innerHTML = localStorage.getItem(name, JSON.parse(score));
  //   //localStorage.getItem(name, JSON.parse(score)
  // }


  savePlayerScore(name, score, counter, type) {
    let getNameAndScore;
    if (localStorage.getItem('hiscore') === null) {
      getNameAndScore = [];
    } else {
      getNameAndScore = JSON.parse(localStorage.getItem("hiscore"))

    }
    let hiScoreList = { name: name, score: score, counter: counter, type: type }
    getNameAndScore.push(hiScoreList)
    getNameAndScore.sort(function (a, b) { return (b.score - a.score) })
    
    localStorage.setItem("hiscore", JSON.stringify(getNameAndScore))
  }


  getscore() {
    let getNameAndScore;
    let highscoreList = document.querySelectorAll('.highscore-list ul li');
    if (localStorage.getItem('hiscore') === null) {
      getNameAndScore = [];
    } else {
      getNameAndScore = JSON.parse(localStorage.getItem("hiscore"))

    }

    for (let i = 0; i < getNameAndScore.length; i++) {
      highscoreList[i].innerHTML = `${i + 1}. ${
        getNameAndScore[i].type + ": " + getNameAndScore[i].name + " - score " + getNameAndScore[i].score}`
      if (i === 4) {
        break;
      }
    }
    return getNameAndScore;

  }


  getTheScore() {
    return this.score;
  }
}


