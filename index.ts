#! /usr/bin/env node

import chalk from "chalk"
console.log(chalk.bgBlue.underline.bold.yellowBright("\t\tWord counter by ZAKHEER ALI\n"));
import inquirer from "inquirer"

let ans=await inquirer.prompt([
    {
        type:"input",
        name:"sentence",
        message:"Enter your sentence:",
    }
])

let word=ans.sentence.trim().split(" ");
console.log(word);
console.log(`Your sentence has ${chalk.bold.underline.blueBright(word.length)} words`)