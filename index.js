// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =require('fs');
const os = require('os');
const util = require('util');


// TODO: Create an array of questions for user input
const questions = [];
inquirer.questions(
    [
        {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'ProjectTitle',
        },

        {
            type: 'input',
            message: 'what is your project about?',
            name: 'projectDescription',
        },

        {
            type: 'input',
            message: 'what is the installation process of your project?',
            name: 'installation',
        },

        {
            type: 'input',
            message: 'what is your project used for?',
            name: 'usage',
           
        },

        {
            type: 'input',
            message: 'chose a license for this project',
            name: 'license',
            choices: [
            "Firefox",
            "Google Chrome",
            "apache",
            "ISC",
            "MIT",
            "OPEN"
            ]
           
        },

        {
            type: 'input',
            message: 'who are the other contributors?',
            name: 'contributions',
            
        },
    
    
        {
            type: 'input',
            message: 'has any testing been done?',
            name: 'testing',
           
        },

        {
            type: 'input',
            message: 'please enter your GitHub username.',
            name: 'username',
           
        },
    
    
        {
            type: 'input',
            message: 'Please enter your email address.',
            name: 'emailAddress',
            
        },
    
    
    
    
    ]
)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    async function init() {
        try {
            // Ask user questions and generate responses
            const answers = await questions();
            const generateContent = generateReadme(answers);
            // Write new README.md to dist directory
            await writeToFile('./dist/README.md', generateContent);
            console.log('✔️  Successfully wrote to README.md');
        }   catch(err) {
            console.log(err);
        }
      }
}


// Function call to initialize app
init();
