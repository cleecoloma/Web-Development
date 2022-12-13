function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆
    //Write your code here:
    var output = [0, 1];
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        for (let number = 0; number + 2 < n; number++) {
            let newNumber = output[number + 1] + output[number];
            output.push(newNumber);
        }
        return output;
    }
    //Return an array of fibonacci numbers starting from 0.
    //Do NOT change any of the code below 👇
}
console.log(fibonacciGenerator(15));
