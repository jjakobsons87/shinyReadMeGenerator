// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license === 'MIT') {
    `https://img.shields.io/badge/license-${license}-blue.svg`;
  } else if (data.license === "GPL-3.0") {
    `https://img.shields.io/badge/license-${license}-blue.svg`;
  } else if (data.license === "BSD-3") {
    `https://img.shields.io/badge/license-${license}-blue.svg`;
  } else if (data.license === "Apache-2.0") {
    `https://img.shields.io/badge/license-${license}-blue.svg`;
  } else if (data.license === "No-License") {
    " "
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  let link = "";

  if (data.license === 'MIT') {
    "https://choosealicense.com/licenses/mit/#";
  } else if (data.license === 'GPL-3.0') {
    "https://choosealicense.com/licenses/gpl-3.0/";
  } else if (data.license === 'Apache-2.0') {
    "https://www.apache.org/licenses/LICENSE-2.0";
  } else if (data.license === 'BSD-3') {

  } else if (data.license === "No License") {
    "No License Selected"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}
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