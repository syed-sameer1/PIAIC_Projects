import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter Your First Number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Enter Your Second Number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "Select One Of The Operator",
        type: "list",
        name: "operator",
        choices: ['-', '+', '/', 'x']
    }
]);
let result = 0;
switch (answer.operator) {
    case '+':
        result = answer.firstNumber + answer.secondNumber;
        break;
    case '-':
        result = answer.firstNumber - answer.secondNumber;
        break;
    case '/':
        result = answer.firstNumber / answer.secondNumber;
        break;
    case 'x':
        result = answer.firstNumber * answer.secondNumber;
        break;
    default:
        break;
}
console.log(result);
