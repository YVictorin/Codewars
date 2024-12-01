// Struggled with understanding the question itself, the input => output example was what helped me the most

// Description:
// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    if(n < 10) return [n];

    let result = String(n);
    let arr = [];

    for(const digit of result) {
        arr.push(Number(digit));
    }

    return arr.reverse();
}