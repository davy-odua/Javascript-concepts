//ARRAYS - A COMPLEX DATA STRUCTURE
//Arrays lets you store multiple data values in a ingle variable
// let food = [20, 15, 10, 30 ]
// console.log(food[0]) //First element
// console.log(food[food.length -1]) //Last element

//ARRAY METHODS
// food.push("Cheese") // - Method used to add elements to our array (array.push())

//array.filter() - //.filter method - Allows you to pass in a test or a condition
                 /// And then it goes through every single element in our array
                 /// And if the element passes the condition, its going to remain in the array
                 /// And if it does not pass the condition, its going to be kicked out of the array.
// let filteredArray = food.filter((element) =>  element <= 15);
// console.log(filteredArray)


// console.log(food)

// let peoples = [18, 20, 16, 15, 21]

// let adults = peoples.filter(element =>  element >= 18);
// console.log(adults)


//Looping through arrays using for loops
// let people = [18, 20, 16, 15, 21];

// for (let i=0; i < people.length -1; i++){
//     console.log(people[i])
// }



//Solving using filter method
// people3 = [18, 20, 16, 15, 21]

// adults3 = people3.filter(element =>  element >= 18)
// console.log(adults3)



// people3 = [18, 20, 16, 15, 21]

// adults3 = people3.filter((element) => {
//     console.log(element)
//     if (element >= 18){
//         return true
//     }
// })
// console.log(adults3)


let people3 = [18, 20, 16, 15, 21]

let adults3 = []

for (i = 0; i < people3.length; i++){
    if (people3[i] >= 18){
        adults3.push(people3[i])
    }
}

console.log(adults3)














