class Bot {

    numberlow;
    numberhigh;
    number1;
    number2;

    constructor() {
        this.numberlow = 0;
        this.numberhigh = 0;
        this.number1 = 0;
        this.number2 = 0;
    }


     // Tar lägsta/högsta adderar/subtraherar 1 tar random mellan dom två variablerna
    dumbbot(low, high) {

        if (Math.round(Math.random()) == 0) {
            this.numberlow = low + 1;
        } else {
            this.numberlow = high - 1;
        }

        console.log(this.numberlow)
        return this.numberlow;

    }
        // Tar lägsta/högsta värdet och tar hälften, om det är ett decimaltal tar den random av närmsta tal över och under
    smartbot(low, high) {

        this.numberhigh; 

        this.number1 = Math.ceil((high + low) / 2);

        this.number2 = Math.floor((high + low) / 2);

        if (Math.round(Math.random()) == 0) {
            this.numberhigh = this.number1;
        } else {
            this.numberhigh = this.number2;
        }

        console.log(this.numberhigh)
        return this.numberhigh;
    }

}