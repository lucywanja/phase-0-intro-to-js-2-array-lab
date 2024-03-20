// Write your solution here!


// Define an array cat and set the initial values
let cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end of the cats array
function destructivelyAppendCat() {
  cats.push("Ralph");
}
destructivelyAppendCat();
console.log(cats); //log the cat array to display the updated list of cats

//Function to prepend a cat to the beginning of the cats array
function destructivelyPrependCat() {
  cats.unshift("Bob");
}
destructivelyPrependCat();
console.log(cats);

 // Function to remove the last cat 
function destructivelyRemoveLastCat() {
  cats.pop();
}
destructivelyRemoveLastCat();
console.log(cats);

// Function to remove first cat from the cats array

function destructivelyRemoveFirstCat() {
  cats.shift();

}
destructivelyRemoveFirstCat();
console.log(cats);


// Function to append a cat to the cats array and returns a new array



function appendCat(catName) {
  return cats.concat(catName);
}

let updated_Cats = appendCat("Broom");

console.log(updated_Cats);
console.log(cats);

 
// Function to prepend a cat to the cats array and returns a new array leaving the cats array unchanged
function prependCat(catName) {
  return [catName, ...cats]; 
//prependCat function takes a catName parameter and uses the spread syntax (...) to prepend the catName at the beginning of the cats array
  
}
let newCats = prependCat("Arnold");//The prependCat function returns a new array with the added cat name at the beginning.
console.log(newCats);

//Function to remove the last cat in the cats array and returns a new array leaving the cats array unchanged

 function removeLastCat() {
  return cats.slice(0, -1);
}

  let updatedCat = removeLastCat();
    
  console.log(updatedCat);
  console.log(cats);

  //Function to remove the first cat from the cats array and returns a new array leaving the cats array unchanged

  function removeFirstCat() {
    return cats.slice(1);
  }
  
  let updatedCats = removeFirstCat();
    
  console.log(updatedCats);
  console.log(cats);


