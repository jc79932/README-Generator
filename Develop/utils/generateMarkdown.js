// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput, gitInfo) {
  let tableOC = `## Table of Contents`;

  if (userInput.description !== 'N/A') {
    tableOC += `
* [Description](#description)` };
  if (userInput.installation !== 'N/A') { 
    tableOC += `
* [Installation](#installation)` };
  if (userInput.usage !== 'N/A') {
    tableOC += `
* [Usage](#usage)` };
  if (userInput.contributing !== 'N/A') { 
    tableOC += `
* [Contributing](#contributing)` };
  if (userInput.tests !== 'N/A') { 
    tableOC += `
* [Tests](#tests)` };

  let tempMarkdown = 
  `# ${userInput.title !== 'N/A'}`;
  tempMarkdown = tempMarkdown + 
  `
  ## Description 
  
  ${userInput.description}
  `
  tempMarkdown += tableOC;
  
  tempMarkdown += `
  * [License](#license)`;
  
  if (userInput.installation !== 'N/A') {
  tempMarkdown +=
  `
  ## Installation
  
  ${userInput.installation}`
  };
  
  if (userInput.usage !== 'N/A') {
  
  tempMarkdown +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userInput.usage}`
  };
  
  
  // Optional Contributing section
  if (userInput.contributing !== '') {

  tempMarkdown +=
    
  `
  
  ## Contributing
  
  ${userInput.contributing}`
  };
  
  if (userInput.tests !== '') {
  
  tempMarkdown +=
  `
  
  ## Tests
  
  ${userInput.tests}`
  };

  tempMarkdown +=
  `
  ## License
  
  ${userInput.license}
  `;

  // let loopInput = []
  // for(var i in userInput)
  //   loopInput.push([i, userInput[i]]);

  
  return (tempMarkdown);
}

module.exports = generateMarkdown;
