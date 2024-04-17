#! /usr/bin/env node

import inquirer from "inquirer";

console.log('Welcome to number guessing games');
console.log('Guess number between 1 to 10 to save the Queen 💀💀');

let randomNumber = Math.floor(Math.random() * 10 + 1);

let checkAnswer = async (computerNumber : number, turn :number) => {

    let answer = await inquirer.prompt([
        {
            name : 'userNumber',
            type : 'number',
            message : 'Guess Your Number'
        }
    ]);

    if(answer.userNumber === computerNumber){
        console.log('Congratulation!!!, You save the Queen. ❤️ ❤️')
    }else{

        if(turn == 0){
            console.log('HAHAHA!!! You loose Queen is no more 💀💀');
            return;
        }

        console.log(`HAHAHA!!! Try again now you have only ${turn} lives`);

        checkAnswer(randomNumber, turn -1);

    }

}

checkAnswer(randomNumber, 2);