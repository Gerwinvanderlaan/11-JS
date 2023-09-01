

function turnTheKey(){
  const key = prompt("Start the car by turning the key. Type 'turn'.");
  if (key === 'turn'){
    startTheCar();
  } else {
    alert("The car didn't start.");
  }
}

function startTheCar(){
  const readyToGo = prompt("The car is ready when you are. To start the engine type 'start'.");
  if (readyToGo === 'start'){
    driveTheCar();
  } else {
    alert("The car didn't drive.");
  }
}

function driveTheCar(){
  const drive = prompt("Fasten your seatbelt, cause this will be a bumpy ride! Type 'go' to drive!");
  if (drive === 'go'){
    console.log("VROOOOOOOOOOOOOOOOM!");
  }
}

function checkAge(){
  const age = prompt("What is your age? Enter number between 1 and 100.");
  if (age >= 18){
    checkDriversLicense();
  } else {
    alert("You are not old enough to drive a car.");
    checkAge();
  }
}

function checkDriversLicense(){
  const license = prompt("Do you have a drivers license? 'y' or 'n'?");
  if (license === 'y'){
    turnTheKey();
  }
}

checkAge();