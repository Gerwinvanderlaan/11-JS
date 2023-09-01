var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study JS",
    "eat healthy"
];

var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study JS!",
    "eat healthy!"
]

// FOR

var todosLength = todos.length;

for(var i = 0; i < todosLength; i++){
    console.log(i);
}

// FOR EACH

todos.forEach(function(i){
    console.log(i);
})

// FOR EACH CAN BE SIMPLIFIED BY->

function logTodos(todo, i){
    console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);


// WHILE

// var counterOne = 0;

// while (counterOne <= 10){
//     console.log(counterOne);
//     counterOne++;
// }

// // DO WHILE

// var counterTwo = 10;

// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);

