const fruits = { apple: 10, berry: 20, banana: 30, kiwi: 29 };
const { apple, kiwi, berry: newBerryName, grape } = fruits;
console.log(apple);
console.log(kiwi);

console.log(newBerryName);

const quantity = [1, 2, 3, 4, 5, 6];
const [a, b, , e, ...c] = quantity;
console.log(a);
console.log(b);
console.log(c);
console.log(e);

let bar = "apple";
console.log(bar);
const newData = bar.toUpperCase;
console.log(bar);
console.log(newData);
let arrayBottle = ["white", "blue", "grey"];
arrayBottle.push("black");

let bBottle = arrayBottle;
console.log(bBottle);
console.log(arrayBottle);
let newArray = [...arrayBottle, ...quantity];
console.log(newArray);

let objFruit = { apple: "red", banana: "yellow", tomato: "green" };
// let newObj = objFruit;
newObj = { ...objFruit, rasberry: "pink" };
newObj.grape = "purple";
console.log(objFruit);
console.log(newObj);
