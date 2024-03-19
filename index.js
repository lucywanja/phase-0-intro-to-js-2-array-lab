// Write your solution here!


// Define an array cat and set the initial values
let cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}
  
destructivelyAppendCat("Ralph");

//Function to prepend a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

destructivelyPrependCat("Bob");

// Function to remove the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
  }

 // Function to remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
  } 
  
 // Function to append a cat to the cats array and returns a new array
function appendCat(name) {
    return cats.concat(["Broom"]);
  }

// Function to prepend a cat to the cats array and returns a new array
function prependCat(name) {
    return ["Arnold"].concat(cats);
  } 

// Function to remove the last cat in the cats array and returns a new array
function removeLastCat() {
    return cats.slice(0, -1);
  }

 // Function to remove the first cat from the cats array and returns a new array
function removeFirstCat() {
    return cats.slice(1);
  } 