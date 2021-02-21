//-------------------------------------------------------------------------------------------------------------------
// DECLARE DEPENDENCIES, GLOBAL VARIABLES & INITIAL CONVERSIONS
//-------------------------------------------------------------------------------------------------------------------

    // Include packages needed for this application
    const inquirer = require("inquirer");
    const fs = require("fs");
    const util = require("util");

    // Include related module exports needed for this application
    const Employee = require("./classes_js/employee_class");
    const Manager = require("./classes_js/manager_class");
    const Engineer = require("./classes_js/engineer_class");

    // Define a global array of employees to pull from when generating the HTML content (array is added to as new classes are created)
    let nextStep;
    let fullTeam = [];

    // Use promisify to convert fs.writeFile method so that it returns a promis object
    const writeFileAsync = util.promisify(fs.writeFile);

//-------------------------------------------------------------------------------------------------------------------
// FUNCTIONAL PROGRAM LOGIC TO BE EXECUTED UPON INVOKATOIN OF CREATE MANAGER & SUBSEQUENT FUNCTIONS AT SCRIPT BOTTOM
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

    // If invoked, prompt the following questions...
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
                message: "You've completed entry of the engineers information. Please select what you like to do next.",
                choices: ["Add another Engineer", "Add an Intern", "Finish Building Team"]
            }
        ])
    }

    // If invoked, prompt the following questions...
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
                message: "You've completed entry of the engineers information. Please select what you like to do next.",
                choices: ["Add another Engineer", "Add an Intern", "Finish Building Team"]
            }
        ])
    }

    // When invoked, create team profile cards to put into the HTML file that will be written in the createTeamProfile Function

        // For each instance of an employee (manager, intern, and engineer instances) create an HTML profile card
        //const generateHTMLpage = () => {

       // }

//-------------------------------------------------------------------------------------------------------------------
// DEFINE SEQUENCE FOR ASYCHRONOUS LOGIC EXECUTION
//-------------------------------------------------------------------------------------------------------------------

    // (PROGRAM START) Start the program by creating a new manager
    const createManager = () => {

        // Upon start of application (createManager invoked) prompt user for manager information (and next steps selection)
        promptForManagerInfo()

            // Then, when manager information is completed, take the managerResponse..
            .then(response => {
            console.log(response);

                // Create a new employee instance..
                const employee = new Employee (response.name, response.employeeID, response.email);
                console.log (`Created employee information is ${JSON.stringify(employee)}`);
                console.log (`employee created`)

                // Create a new manager instance... (Ask question on this, feels redundant. Do I have to creat new employee and manager separate?)
                const manager = new Manager (response.name, response.employeeID, response.email, response.officeNumber);
                console.log (`Created manager information is ${JSON.stringify(manager)}`);
                console.log (`manager created`)

                // Set the value of the nextStep global variable to the selected next steps
                nextStep = response.nextStep;
                console.log(`Next step within .then(managerresponse) set to ${nextStep}`);
            })
   
            // Then (if the above is successful) If they want to create another employee, invoke the appropraite function ELSE begin the team profile generation process..
            .then(() => {
            console.log(`Next step within .then that invokes which function to run next is set to ${nextStep}`);

                // If they want to add an engineer, call the createEngineer function
                if (nextStep === "Add an Engineer") {
                    createEngineer();
                }
                // If they want to add an intern, call the createIntern function
                else if (nextStep === "Add an Intern") {
                    createIntern();
                }
                // Else (if they decide to finish building the team, the third option) call the createTeamProfile function...
                else {
                    createTeamProfile();
                }
            })

            // If there is an failure, console log an error and stop the sequence
            .catch(err => console.error(err));     
    }


    // (IF SELECTED AS NEXT STEP) If the user selects to add an engineer, create a new engineer
    const createEngineer = () => {
     console.log(`createEngineer function invoked`);

         // If function is invoked, promt the user to answer questions about their engineer...
         promptForEngineerInfo()

            // Then, when manager information is completed, take the EngineerResponse and..
            .then(response => {
            console.log(response);

                // Create a new employee instance..
                const employee = new Employee (response.name, response.employeeID, response.email);
                console.log (`Created employee information is ${JSON.stringify(employee)}`);
                console.log (`employee created`)

                // Create a new Engineer instance... 
                const engineer = new Engineer (response.name, response.employeeID, response.email, response.github);
                console.log (`Created Engineer information is ${JSON.stringify(engineer)}`);
                console.log (`Engineer created`)

                // Set the value of the nextStep global variable to the selected next steps
                nextStep = response.nextStep;
                console.log(`Next step within set to ${nextStep}`);
            })

         // Then (if the above is successful) If they want to create another employee, invoke the appropraite function ELSE begin the team profile generation process..
            .then(() => {
            console.log(`Next step on new .then is  ${nextStep} (should be same as above)`);

                // If they want to add an engineer, call the createEngineer function
                if (nextStep === "Add an Engineer") {
                    createEngineer();
                }
                // If they want to add an intern, call the createIntern function
                else if (nextStep === "Add an Intern") {
                    createIntern();
                }
                // Else (if they decide to finish building the team, the third option) call the createTeamProfile function...
                else {
                    createTeamProfile();
                }
            })

         // If there is an failure, console log an error and stop the sequence
         .catch(err => console.error(err));     

        }

        // If the user selects to add an intern, create a new intern
        const createIntern = () => {
        console.log(`createIntern function invoked`);

            // If invoked, prompt user for intern information (and next steps selection)

                // Then, when intern information is completed, take the internResponse...

                    // And create a (parent) instance of Employee class with name, id, email

                    // Then (which is needed to ensure an instance of this employee is availible to extend as an instance of engineer...) 

                        // Create an instance of Intern class with school...
                
                            // Then, If they want to create another employee, invoke the appropraite function ELSE begin the team profile generation process..

                            // If an error is detected, catch it, console log an error and stop the function
    }

    // If the user selects to finish building the team profile....
    const createTeamProfile = () => {
    console.log(`createTeamProfile function invoked`);

        // Define the base HTML to be created for the page (container for employee cards)

        // Write the base HTML file to the rendered_files_html page using my promisified writeFile...

        // Then, once that is completed, write the HTML file using the promisified fs writeFile function I created...

            // Then, if no error is detected, console log "success"

            // If an error is detected, catch it, console log an error and stop the function

    }

//-------------------------------------------------------------------------------------------------------------------
// START THE PROGRAM BY INVOKING THE CREATE MANAGER FUNCTION
//-------------------------------------------------------------------------------------------------------------------

    // Invoke the createMAnager function, which starts the sequence of events to create a team profile
    createManager();