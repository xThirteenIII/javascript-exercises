const getTheTitles = function(arrayOfBooks) {

  let arr = [];
  arrayOfBooks.forEach((book) =>{

    arr.push(book.title)
  })

  return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
