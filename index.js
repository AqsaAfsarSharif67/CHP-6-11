

/// CHP 9 to 11

//(question 1)Write a program to take “city” name as input from user. If
//user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

 let city = prompt("enter you're city")
 if ("karachi"){
   console.log("Welcome to the city o lights");
 }

// (QUESTION 2)Write a program to take “gender” as input from user. If the
//user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

let gender = prompt("enter ur gender");
if (gender === "male"){
    console.log("Good Morning Sir");
}
else if(gender === "female"){
    console.log("Good Morning Ma'am");
}
else {
    console.log("Other");
}



//(QUESTION 3)Write a program to take input color of road traffic signal
//from the user & show the message according to this table:

let trafficColor = prompt("Enter traffic color for information");

if (trafficColor === "red") {
    console.log("Must stop");  
}
else if (trafficColor === "yellow") {
    console.log("Ready to move");
}
else if (trafficColor === "green") {
    console.log("Move now");
}
else {
    console.log("Error: Invalid traffic color");
}

//(QUESTION 4)Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
 // show the message “Please refill the fuel in your car”

 let remainingFuel = prompt("Enter remaining fuel in litres:");

// Check if remaining fuel is less than 0.25 litres
// Convert the input to a number implicitly when comparing
if (remainingFuel < 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("You have enough fuel");
}

//(QUESTION 5)Run this script, & check whether alert message would be displayed or not. Record the outputs.

var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
if (true){
    alert("True");
}
if (false){
    alert("False");
}
if ("car" < "cat"){
    alert("car is smaller than cat");
}



//////////////////////////////////////////////////// ques 6 ////////////////////////////////
// Q:Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

function calculateGradeAndRemarks() {
    // Taking input from the user
    let subject1_marks = parseInt(prompt("Enter marks obtained in subject 1: "));
    let subject2_marks = parseInt(prompt("Enter marks obtained in subject 2: "));
    let subject3_marks = parseInt(prompt("Enter marks obtained in subject 3: "));
    let total_marks = parseInt(prompt("Enter total marks for each subject: "));

    let obtained_marks = subject1_marks + subject2_marks + subject3_marks;


    let percentage = (obtained_marks / total_marks) * 100;

 
    let grade, remarks;

    if (percentage >= 90) {
        grade = 'A';
        remarks = 'Excellent! Keep up the good work.';
    } else if (percentage >= 80) {
        grade = 'B';
        remarks = 'Very good! Aim even higher.';
    } else if (percentage >= 70) {
        grade = 'C';
        remarks = 'Good! But you can improve.';
    } else if (percentage >= 60) {
        grade = 'D';
        remarks = 'Fair. Focus on areas needing improvement.';
    } else {
        grade = 'F';
        remarks = 'Needs improvement. Seek help.';
    }

 
    document.write(`<h2>Results</h2>`);
    document.write(`<p>Total marks: ${total_marks}</p>`);
    document.write(`<p>Marks obtained: ${obtained_marks}</p>`);
    document.write(`<p>Percentage: ${percentage.toFixed(2)}%</p>`);
    document.write(`<p>Grade: ${grade}</p>`);
    document.write(`<p>Remarks: ${remarks}</p>`);
}
calculateGradeAndRemarks();


//(QUESTION 7)Guess game:
//Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
 // a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

let secretNumber = 7;
let userGuess = prompt("Guess the secret number (between 1 and 10):");
if (userGuess == secretNumber) {
    alert("Bingo! Correct answer.");
} else if (userGuess == secretNumber + 1 || userGuess == secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, incorrect guess. The secret number was " + secretNumber + ".");
}

//(QUESTION 8)Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number is divisible by 3.

let number = prompt("Enter a number to check if it is divisible by 3:");
number = +number; 
if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}

//(QUESTION 9)Write a program that checks whether the given input is an
// even number or an odd number.


let num = prompt("Enter a number to check if it is even or odd:");
num = +num; 
if (num % 2 === 0) {
    alert(num + " is an even number.");
} else {
    alert(num + " is an odd number.");
}


//(QUESTION 10)Write a program that takes temperature as input and
//shows a message based on following criteria
//a. T > 40 then “It is too hot outside.”
//b. T > 30 then “The Weather today is Normal.”
//c. T > 20 then “Today’s Weather is cool.”
//d. T > 10 then “OMG! Today’s weather is so Cool.”

let temperature = prompt("Enter the temperature:");
temperature = +temperature; 
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("The temperature is below 10 degrees. It's very cold!");
}
  

//(QUESTION 11)Write a program to create a calculator for +,-,*, / & %
//using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %)
//Compute & show the calculated result to user.

let firstNumber = prompt("Enter the first number:");
firstNumber = +firstNumber; 
let secondNumber = prompt("Enter the second number:");
secondNumber = +secondNumber; 
let operation = prompt("Enter the operation (+, -, *, /, %):");
let result;
if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '/') {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        result = "Division by zero is not allowed.";
    }
} else if (operation === '%') {
    result = firstNumber % secondNumber;
} else {
    result = "Invalid operation.";
}
alert("The result of " + firstNumber + " " + operation + " " + secondNumber + " is: " + result);