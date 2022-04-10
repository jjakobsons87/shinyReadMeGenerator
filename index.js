// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your repository? (Required)',
        validate: repoTitle => {
            if (repoTitle) {
                return true;
            } else {
                console.log('Please enter the name of your repository!');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the functionality of the repo (Required)',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Please enter a description of your repo!');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install the repo? (Required)',
        validate: install => {
            if (install) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use.',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('Please provide instructions for use!');
                return false;
            }
        } 
    },
    {
        type:'confirm',
        name: 'confirmCredits',
        message: 'Would you like to list any collaborators, third-party assets, or tutorials?',
        default: true
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please enter any collaborators, third-party assets, or tutorials!',
        when: ({ credits })  => {
            if (credits) {
                return true;
            } else {
                return false;
            }
        } 
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to apply (Required)?',
        choices: ["MIT License", "GPL 3.0", "BSD 3", "Apache 2.0", "No License"],
        
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please choose a license!');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username (Required)?',
        validate: username => {
            if (username) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address (Required)',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        } 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions).then((readmeData) => {
        return readmeData;
    });
} ;

// // Function call to initialize app
init()
    .then((readmeData) => {
        return generateMarkdown(readmeData);
    })
    .then((pageMD) => {
        return fs.writeFile(pageMD);
    })
    .then((writeFileResponse) => {
        console.log(writeFileResponse.message);
    })
    .catch((err) => {
        console.log(err);
    })
