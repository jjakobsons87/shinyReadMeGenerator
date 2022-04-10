// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
  ![badge](https://img.shields.io/badge/license-${license}-red)
  `
}

function renderLicenseSection(license) {
  return renderLicenseBadge(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseSection(data.license)}

  ## Table-Of-Contents 

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Testing](#testing)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Testing 

  ${data.test}

  ## License

  This project is covered under the following license: 
  ${data.license}

  For License information, please visit: 

  ## Contributing 

  ${data.credits}

  ## Questions 

  Any questions? Reach out to me via GitHub or Email! </br>
  [Github](https://github.com/${data.username}) </br>
  [Email](mailto:${data.email})
  `;
};

module.exports = generateMarkdown;