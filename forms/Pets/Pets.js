let pets = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny',
'Riley', 'Saddie', 'Marge', 'Sam']

//Vinny is position 5, remove Vinny
let removedPets = pets.splice(5,1);
console.log(pets)

//Marty is position 3, remove Marty
removedPets = pets.splice(3,1);
console.log(pets)

//Add Nancy to the array to position 0
pets.unshift('Nancy')
console.log(pets)

//Add yourself to the end of the array
pets.push('Elias');
console.log(pets)

//Write the command that gives the indexOf where "Riley" is located.
const rileyIndex = pets.indexOf('Riley')
console.log(rileyIndex);

//Write the command that gives the indexOf where "Cindy" is located
//(this should return-1).
const cindyIndex = pets.indexOf('Cindy')
console.log(cindyIndex);

//Variable called "withMarmaduke" and set it equal to the
//original array concatenated with the string "Marmaduke". Output this
//new array variable to the console.
let withMarmaduke = pets + ',Marmaduke'
console.log(withMarmaduke)

//Option 2
//Use the .shift() array method and show the removed array item in a 
//console.log statement.
let removedPets2 = pets.shift();
console.log(removedPets2)

//Using the .unshift() array method, add the name 'Barney' to the array.
pets.unshift('Barney');
console.log(pets)

//Join two arrays to create allPets variable
let newPets = ['Ted','Fred','Jed','Ned','Ed','Zed'];
allPets = pets.concat(newPets)
console.log(allPets);

// Remove first pet and display it in console
let removedPets3 = allPets.shift()
console.log(removedPets3)

//Used pets1 as var because already used pets as var

let pets1 = allPets.join()
console.log(pets1)

// Add Agnes to array (we used allPets since you didn't specify which array)
allPets.unshift('Agnes');
console.log(allPets)




