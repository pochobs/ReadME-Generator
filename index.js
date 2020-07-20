// requesting module file system from node.js
const fs = require("fs");
// requesting module path from node.js
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// create the question object
const questions = [
  // requesting for and input promise
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project"
  },
  {
  // requesting for and list of choises promise
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "node index.js"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  }
];
// Here we write to file using path module from node.js
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
//We call the inquirer in the function using our question object
function init() {
  inquirer.prompt(questions)
// We get a promise of the answers 
  .then((inquirerResponses) => {
// Here we create the README file using our generateMarkdown Function passing in response of the inquirer Promise.
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
  })
}

init();
