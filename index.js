const stringOne = "Web Development Tutorial";
const stringTwo = "This is my homework";
const stringThree = "I am good at this";

function findingTheLongestWord(someString) {
    let stringedArray = someString.split(" ");
    let longestItem = "";
    let longestItems = [];
    for (item in stringedArray) {
        if (item.length >= longestItem.length) {
            longestItem = item;
            longestItems.push(item);
        }
    }
    return longestItems
}

console.log(findingTheLongestWord(stringOne));
console.log(findingTheLongestWord(stringTwo));
console.log(findingTheLongestWord(stringThree));



