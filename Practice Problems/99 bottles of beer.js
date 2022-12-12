var output = [];
var count = 99;

function beer() {
    while (count > 0) {
        output.push(count + " bottles of beer on the wall, " + count + " bottles of beer.");
        var nextCount = count - 1
        output.push("Take one down and pass it around, " + nextCount + " bottles of beer on the wall.");
        count--;
    }
    output.push("No more bottles of beer on the wall, no more bottles of beer.");
    output.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
    console.log(output);
}