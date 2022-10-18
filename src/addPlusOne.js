//different way to write function 
const countPlusOne = (count) => {
    // perform any task in between 

    return count + 1;
}; 

console.log(countPlusOne(2));

//with concise body and implicit return 
const countPlusOne_2 = (count) => 
    count + 1;

console.log(countPlusOne_2(3));

//with concise body and one line statement 
const countPlusOne_3 = (count) => count + 1;

console.log(countPlusOne_3(4));