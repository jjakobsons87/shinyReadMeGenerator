// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license === 'MIT License') {
    `https://img.shields.io/badge/license-${license}-blue.svg`;
  } else if (data.license === "GPL 3.0") {
    `https://img.shields.io/badge/license-${license}-blue.svg`;
  } else if (data.license === "BSD 3") {
    `https://img.shields.io/badge/license-${license}-blue.svg`;
  } else if (data.license === "Apache 2.0") {
    `https://img.shields.io/badge/license-${license}-blue.svg`;
  } else if (data.license === "No License") {
    'No License Selected'
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
https: function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //MIT
  // MIT License
  // Copyright (c) [year] [fullname]

  // Permission is hereby granted, free of charge, to any person obtaining a copy
  // of this software and associated documentation files (the "Software"), to deal
  // in the Software without restriction, including without limitation the rights
  // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  // copies of the Software, and to permit persons to whom the Software is
  // furnished to do so, subject to the following conditions:

  // The above copyright notice and this permission notice shall be included in all
  // copies or substantial portions of the Software.

  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  // SOFTWARE.
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseLink(data.license)}

  ## Table-Of-Contents 

  * [Description](#description)
  * [Usage](#usage)
  * [Installation](#installation)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)

  ## Description

  ${data.description}

  ## Usage

  ${data.usage}

  ## Installation

  ${data.install}

  ## License

  ${renderLicenseSection (data.license, data.credits)}

  ## Contributing 

  ${data.credits}

  ## Questions 

  Any quetsions? Reach out to me via GitHub or Email! 
  [Github](https://github.com/${data.username}) 
  [Email](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;