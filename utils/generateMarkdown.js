// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![badge](https://img.shields.io/badge/license-${license}-red)`;
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

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

  

  ## Contributing 

  ${data.credits}

  ## Questions 

  Any questions? Reach out to me via GitHub or Email! 
  [Github](https://github.com/${data.username}) 
  [Email](mailto:${data.email})
  `;
};

module.exports = generateMarkdown;