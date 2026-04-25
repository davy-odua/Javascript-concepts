//OBJECTS - Are data structure that allow us to store multiple properties that are related  in a single variable

let users = [
  {
    email: "davy@gmail.com",
    password: "paswword123",
    name: "Davy",
    discord: "davydiscord",
    subscription: "VIP+",
    lessonsCompleted: [1, 2, 3],
  },
  {
    email: "example@gmail.com",
    password: "word123",
    name: "Codes",
    discord: "codesdiscord",
    subscription: "VIP+",
    lessonsCompleted: [1, 2, 3, 4, 5],
  },
];

// console.log(users[1].lessonsCompleted.map(element=> element * 10))

function signUp(user) {
  users.push(user);
}

signUp({
    email : "doe@gmail.com", 
    password: "123", 
    name : "des", 
    discord:"esdiscord", 
    subscription:"VIP+", 
    lessonsCompleted:[1, 2, 3]
});

console.log(users);
