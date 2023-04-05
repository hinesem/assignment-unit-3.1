
console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favFood = [['fried chicken', 'burgers', 'steak'], ['tomatoes', 'sweet potatoes'], ['pears', 'pineapples', 'oranges'], ['pretzels', 'donuts'], ['pepsi', 'milk', 'chocolate milk', 'blue moon', 'root beer']];

let favDrink = ['pepsi', 'chocolate milk', 'root beer', 'ginger ale', 'blue moon', 'arnold palmer'];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log('log your array of foods: ');
console.log(favFood);
console.log(favDrink);
console.log(favFood[1]);
console.log(`The second item in the third nested array is: ${favFood[2][1]}`);


// 2. Array.length - tells you how many items are in the array
// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);


// 2.a. TODO: Log to the console the number of foods in your array
console.log('--- 2. Length of an array ---');
console.log(favFood.length);
console.log(favDrink.length);
console.log(`there are ${favDrink.length} items in your favorite drinks list which are: ${favDrink}`);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
console.log(animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log(animalArray[3]);


// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log(animalArray[animalArray.length -1]);


// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
console.log(favFood);
favFood.push('jalapenos');
console.log(favFood[favFood.length -1]);
console.log(favFood);


// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
console.log(favFood.pop());
console.log(favFood);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

addedFood = favFood.unshift('tacos');
console.log(favFood[0]);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array

console.log(`The item ${favFood.shift()} was removed from the food list`);
// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
favFood.splice(1, 0, 'guacamole');
console.log(favFood);
// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
favDrink.sort();
console.log(favDrink);
// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.
console.log(favDrink.join(" and "));

/*
console.log('regex and for commas');
let andRegexFavDrink = favDrink.toString;
let a = andRegexFavDrink.replace(',', ' and ');
console.log(a);
*/
// let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "W3Schools");
// console.log(result);

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']
FoodNanimals = animalArray.concat(favFood);
console.log(FoodNanimals);

/*


let toDoItems = ['laundry', 'kitchen', 'groceries', 'cleaning', 'painting'];

/*
console.log(toDoItems[0]); // 0 is 'laundry'
console.log(toDoItems[toDoItems.length -2]);

// arrays have methods push pop shift unshift

toDoItems.push('bedtime'); // adding 'bedtime' to the end

let lastItem = toDoItems.pop();
console.log(lastItem);
console.log(toDoItems.length);

console.log('shifting todos...');
let firstItems = toDoItems.shift();
//console.log(firstItems);
//console.log(toDoItems.length);

console.log(toDoItems);
//console.log(toDoItems.length);


// range of indexes
console.log(toDoItems.slice(1,3));
*/


// loops

/*
let count = 1;

while(count <= 10) {
    console.log(count);
    count += 1;
}



let count = 1;

for (let count = 1; count <= 10; count += 1) {
    console.log(count);
}

for (let i = 0; i <= toDoItems.length - 1; i += 1) {
    console.log(toDoItems[i]);
}

console.log('----------');

console.log('skipping after kitchen');
for (let i = 0; i < toDoItems.length; i += 1) {
    console.log(toDoItems[i]);

    if (i === 'kitchen') {
        i += 1;
    }
    console.log(toDoItems)
}



// but this is easier, because it has less to screw up
for (let i of toDoItems) {
    console.log(i);
}

// let and const are 'block-scoped' ie they exist in curly braces


// does the same thing, but not as feature rich as for of
toDoItems.forEach(function(toDoItems) {
    console.log(toDoItems);
})

do { // guarantees the code block will run AT LEAST once, even if the condition is false (even if the random number < 0)
    console.log('hello');
} while (Math.random() < 0.75)

let i = 0;
const max = 10;
while(i < max) {
    console.log(i);
    i++;
}
console.log(i);

// for of is nicer than for in
console.log('Naughty for in');
for (let i in toDoItems) {
    console.log(i);
}
the ability to keep both the small and big at the same time

keep an eye on the big picture. but then focusing down like a laser of what is the immediate problem. 

another technique is pseudo-code ie 
// figure if the item is kitchen
  // then skip the next one
  
*/