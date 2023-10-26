const CURRENT_YEAR = 2023

const findTheOldest = function(arrayOfPeople) {

  let name = "";
  let oldest = 0;


  arrayOfPeople.forEach(person=>{


    if ("yearOfDeath" in person){
      if (person.yearOfDeath - person.yearOfBirth > oldest) {
        name = person.name;
        oldest = person.yearOfDeath - person.yearOfBirth;
      }
    }else{
      if (CURRENT_YEAR - person.yearOfBirth > oldest){

        name = person.name;
        oldest = CURRENT_YEAR - person.yearOfBirth;
      }
    }

  
  })

  return name
};

// Do not edit below this line
module.exports = findTheOldest;
