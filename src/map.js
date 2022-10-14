const numbers_1 = [1, 4, 9, 16];

const numbers_2 = [1, 2, 3, 4]; 

const items_1 = ["LIST", "TOI&moi", "SOulking"];

const newNumbers = numbers_1.map(function(number){
    return number * 2;
});

const addNumbers = numbers_2.map(function(number){
    return number + number;
})

console.log(newNumbers, addNumbers);

const addItem = items_1.map(function(item){
    return item + " item_added";
});

console.log(addItem);