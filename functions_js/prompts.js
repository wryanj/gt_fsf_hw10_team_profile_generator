/* 

// NOT USED YET- COPIED OVER

//-------------------------------------------------------------------------------------------------------------------
// FUUNCTION DEPENDENCIES IMPORT
//-------------------------------------------------------------------------------------------------------------------

    // Include packages needed for this application
    const inquirer = require("inquirer");
    const fs = require("fs");
    const util = require("util");

//-------------------------------------------------------------------------------------------------------------------
// FUNTIONS USED FOR PROMPTING THROUGH CLI
//-------------------------------------------------------------------------------------------------------------------

    // When the application starts (which invokes this function), prompt the user to enter manager info (name,employeeID,email,officeNumber)
    const promptForManagerInfo = () => {

        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter the manager's name"
            },
            {
                type: "input",
                name: "employeeID",
                message: "Please enter the manager's employee ID"
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the manager's email address"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Please enter the manager's office number"
            },
            {
                type: "list",
                name: "nextStep",
                message: "You've completed entry of the manager's information. Please select what you like to do next.",
                choices: ["Add an Engineer", "Add an Intern", "Finish Building Team"]
            }
        ])
    }

    // If invoked, prompt the following questions to facilitate creation of an instance of an Engineer class...
    const promptForEngineerInfo = () => {

        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter the engineer's name"
            },
            {
                type: "input",
                name: "employeeID",
                message: "Please enter the engineer's employee ID"
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the engineer's email address"
            },
            {
                type: "input",
                name: "github",
                message: "Please enter the engineers Github user name"
            },
            {
                type: "list",
                name: "nextStep",
                message: "You've completed entry of the engineer's information. Please select what you like to do next.",
                choices: ["Add an Engineer", "Add an Intern", "Finish Building Team"]
            }
        ])
    }

    // If invoked, prompt the following questions to facilitate creation of an instance of an Intern class...
    const promptForInternInfo = () => {

        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter the intern's name"
            },
            {
                type: "input",
                name: "employeeID",
                message: "Please enter the intern's employee ID"
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the intern's email address"
            },
            {
                type: "input",
                name: "school",
                message: "Please enter the interns's school"
            },
            {
                type: "list",
                name: "nextStep",
                message: "You've completed entry of the intern's information. Please select what you like to do next.",
                choices: ["Add an Engineer", "Add an Intern", "Finish Building Team"]
            }
        ])
    }

//-------------------------------------------------------------------------------------------------------------------
// EXPORTING FOR USE IN INDEXJS
//-------------------------------------------------------------------------------------------------------------------

    // fill out module.exports correctly...