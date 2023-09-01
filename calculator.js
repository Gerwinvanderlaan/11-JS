





const firstNumber = prompt("Enter first number: ");
const typeOfCalculation = prompt("What type of calculation would you like to perform? +, -, * or /?");
const secondNumber = prompt("Enter second number: ");

if (typeOfCalculation === "+"){
    alert(Number(firstNumber)+Number(secondNumber));
} else if (typeOfCalculation === "-"){
    alert(Number(firstNumber)-Number(secondNumber));
} else if (typeOfCalculation === "*"){
    alert(Number(firstNumber)*Number(secondNumber));
} else if (typeOfCalculation === "/"){
    alert(Number(firstNumber)/Number(secondNumber));
}