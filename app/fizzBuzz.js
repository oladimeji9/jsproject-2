
exports.fizzBuzz = function(number) {

    var value_three = false;
    var value_five = false;

    if (number % 3 === 0) {
        value_three = true;
    }

    if (number % 5 === 0) {
        value_five = true;
    }

    if (value_three && value_five) {
        return "FizzBuzz";
    }
    else if (value_three) {
        return "Fizz";
    }
    else if (value_five) {
        return "Buzz";
    }
    else {
        return number;
    }       
}
