//I have two solutions the refactored one and a original version, the refactored version was one that I saw that I thought was very impressive and that I thought would be worth
// understanding its inner workings



// Description:
//     In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
//     Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.


function highAndLow(numbers){
    let split = numbers.split(' ');
    return `${Math.max(...split)} ${Math.min(...split)}`;
}


function highAndLow(numbers){
    let splittedNums = numbers.split(' ');
    let highest = splittedNums[0];
    let lowest = splittedNums[0];
    let final = "";
    let numArr;

    for(let i = 0; i < splittedNums.length; i++) {
        splittedNums[i] = Number.parseInt(splittedNums[i]); //all the elems are strings
        if(splittedNums[i] > highest){
            highest = splittedNums[i];
        }

        if(splittedNums[i] < lowest) {
            lowest = splittedNums[i];
        }


    }

    numsArr = [highest, lowest];


    final = numsArr.join(" ");

    return final;
}


