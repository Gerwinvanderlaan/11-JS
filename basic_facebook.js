const database = [
    {
        username: "Peter",
        password: "peter123"
    },
    {
        username: "Suus",
        password: "suus244"
    },
    {
        username: "Bobby",
        password: "bobtheman"
    }
];

const newsfeed = [
    {
        username: "Suus",
        timeline: "This new app is really cool!"
    },
    {
        username: "Peter",
        timeline: "Did they do this with JS? Insane!"
    },
    {
        username: "Bobby",
        timeline: "Yes! Finally a good project I can work with!"
    }
];

function isUserValid(username, password){
    for (var i=0;i<database.length;i++){
        if (database[i].username === username &&
            database[i].password === password) {
                return true;
            }
    } return false;
}

function signIn(username, password){
    if(isUserValid(username, password)){
        console.log(newsfeed);
    } else {
        alert("Wrong credentials.")
    }
}

const userNamePrompt = prompt("Username:");
const passwordPromp = prompt("Password:");

signIn(userNamePrompt, passwordPromp);