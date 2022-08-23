// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "None") {
    return ""
  }
  else {
    return `![github license](https://img.shields.io/badge/license-${license}-blueviolet)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "None") {
    return ""
  }
  else {
    return `- [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license =="None") {
    return ""
  }

  else {
    return `## License
    This project is licensed under a ${license} license`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}- ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  ${renderLicenseLink(data.license)}
  - [Testing](#test)
  - [Questons](#questions)
  
  ## Installation
   ${data.installation}
{  
  ## Usage
  ${data.usage}  

  ## Contributing
  ${data.contributing}


  ${renderLicenseSection(data.license)}
  

  ## Testing
  ${data.test}
  
  ## Questions
  If you have any questions please contact me via [email](mailto:${data.email}) or via [github](https://www.github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
