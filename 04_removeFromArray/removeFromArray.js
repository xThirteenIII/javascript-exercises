const removeFromArray = function(arrayOfElements, elementsToRemove) {

  // Create an array from parameters passed as elements
  // to be removed
  // Starting from index i+1 because of the first parameter which is 
  // the array to filter.
  let args = [];
  let filteredArray;
  for (let i=0; i<arguments.length - 1; i++){
    args[i] = arguments[i+1];
  }


  return arrayOfElements.filter((element) => !args.includes(element))

};

// Per ogni elemento in args, 
// se l'array.!includes(elemento) lo rimuovo.

// Do not edit below this line
module.exports = removeFromArray;


