// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
function prompts () {
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title of Your Project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a Short Description of your Project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide Installation Instructions for your Project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide Instructions on how to Use your Application.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can people contribute to your project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license should your project have?',
            choices: ['MIT License', 'GNU GPLv3', 'None'],
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Github Email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github Profile Name?',
        },
    ])
.then(data => {
    writeToFile("./output/README.md", generateMarkdown(data))
})
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
function init() {
    prompts()
}

// Function call to initialize app
init();
