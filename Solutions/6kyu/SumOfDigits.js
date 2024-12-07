//This problem took a lot of start refactor and because of that I now better understand when it is more intuitive to use while loops


// Description:
//     Digital root is the recursive sum of all the digits in a number.
//
//     Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
//
//     Examples
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

/*
* @param {number} n
* @return {number}
*/

function digitalRoot(n) {

    while(n > 9) {
        sumDigits = 0;
        for(const digit of String(n)) {
            sumDigits += Number(digit);
        }
        n = sumDigits;
    }

    return n;
}