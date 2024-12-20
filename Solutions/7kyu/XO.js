// Spent a while not using toLowerCase() but once I figured that my program was actually case-sensitive I was able to solve this challenge

// Exes and Ohs

// Description:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false



function XO(str) {
    str = str.toLowerCase();
    let xcount = 0;
    let ocount = 0;

    for(const letters of str) {
        if(letters === "o") {
            ocount++;
        } else if(letters === "x") {
            xcount++;
        }
    }

    return xcount === ocount;
}