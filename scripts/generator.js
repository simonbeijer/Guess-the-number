// Generator is a tool for a bot to get answers
// each bot has to have own generator.
// Generator has function "getAnswer" with two params ("min", "max"),
// which returns a number between "min" and "max" parameters.
//
// example for bot:
// this.generator = new Generator();
// let answer = this.generator.getAnswer(8, 23);

class Generator {
    constructor() {

    }

    getAnswer(min, max) {
        let low = 0;
        if (min != null && typeof min == 'number') {
            low = min;
        }

        let high = 1000000;
        if (max != null && typeof max == 'number') {
            high = max;
        }
        // returns a random number from "low" to "high"
        let result = low + Math.floor(Math.random() * (high - low));

        // never return negative value
        if (result < 0) {
            result = 0;
        }
        return result;
    }
}

// test
const generator = new Generator();
let answer = generator.getAnswer();
console.log(answer);

answer = generator.getAnswer(55, null);
console.log(answer);

answer = generator.getAnswer(null, 90);
console.log(answer);

answer = generator.getAnswer(55, 2000);
console.log(answer);

answer = generator.getAnswer(1973, 1977);
console.log(answer);

answer = generator.getAnswer(7, 13);
console.log(answer);