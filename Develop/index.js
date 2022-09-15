// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input; 

//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

const questions = [  

{
    type: 'input',
    message: "What is the title of your project?",
    name: 'title',
    default: 'Project Title',
    validate: function (answer) {
        if (answer.length == 0) {
            return console.log("A valid project title is required.");
        }
        return true;
    }
},
{
    type: 'input',
    message: "Write a description of your project.",
    name: 'description',
    // default: '!!!',
    validate: function (answer) {
        if (answer.length == 0) {
            return console.log("Invalid Value. Enter N/A to continue as blank.");
        }
        return true;
    }
},
{
    type: 'input',
    message: "Describe the steps required to install your project for the Installation section, if any.",
    name: 'installation',
    validate: function (answer) {
        if (answer.length == 0) {
            return console.log("Invalid Value. Enter N/A to continue as blank.");
        }
        return true;
    }
},
{
    type: 'input',
    message: "Add instructions or examples for the Usage section.",
    name: 'usage',
    validate: function (answer) {
        if (answer.length == 0) {
            return console.log("Invalid Value. Enter N/A to continue as blank.");
        }
        return true;
    }
},
{
    type: 'input',
    message: "Provide guidelines on how other developers can contribute to your project.",
    name: 'contributing',
    validate: function (answer) {
        if (answer.length == 0) {
            return console.log("Invalid Value. Enter N/A to continue as blank.");
        }
        return true;
    }
},
{
    type: 'input',
    message: "Provide any tests written for your application or any examples on how to run them.",
    name: 'tests',
    validate: function (answer) {
        if (answer.length == 0) {
            return console.log("Invalid Value. Enter N/A to continue as blank.");
        }
        return true;
    }
},
{
    type: 'list',
    message: "Choose a license for your project.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    name: 'license'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    try {
        
        const userInput = await inquirer.prompt(questions);
        console.log("Your responses: ", userInput);
        const gitInfo = "Boby";
        const markdown = generateMarkdown(userInput, gitInfo);
        console.log(markdown);

    } catch (error) {
        console.log(error);
    }
}

// Function call to initialize app
init();
