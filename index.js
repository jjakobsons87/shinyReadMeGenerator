// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateFile = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
        validate: repoDesc => {
            if (repoDesc) {
                return true;
            } else {
                console.log('Please enter a description of your repo!');
                return false;
            }
        } 
    },
    {
        type: 'confirm',
        name: 'confirmToc',
        message: 'Would you like to add a Table of Content to your README?',
        default: false
    },
    {
        // WORK ON THIS - THIS NEEDS MORE INFO ADDED TO CREATE IT 
        type: 'input',
        name: 'TOC Contents',
        message: 'Please enter your your TOC',
        when: ({ confirmToc }) => {
            if (confirmToc) {
                return true;
            } else {
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
        message: 'Please provide instructions and examples for use',
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
        message: 'Please enter any collaborators, third-party assets, or tutorials',
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
        message: 'Please choose a license. (Required',
        choices: ["MIT License", "GPL v3", "The Unlicense", "No License"],
        
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
        message: 'Please enter your GitHub username (Required)',
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
    },
    ]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

questions(); 