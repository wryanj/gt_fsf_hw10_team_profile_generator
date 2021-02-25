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
    const Intern = require("./classes_js/intern_class");

    // Define a global array of employees to pull from when generating the HTML content (array is added to as new classes are created)
    let nextStep;
    let fullTeam = [];
    let finalProfileCardsArray = [];
    let finalProfileCardsArrayJoined;
    let createdHTML;

    // Use promisify to convert fs.writeFile method so that it returns a promis object
    const writeFileAsync = util.promisify(fs.writeFile);

//-------------------------------------------------------------------------------------------------------------------
// FUNCTIONAL PROGRAM LOGIC TO BE EXECUTED UPON INVOKATOIN OF INIT FUNCTION AND SUBSEQUENT FUNCTIONS AT SCRIPT BOTTOM
//-------------------------------------------------------------------------------------------------------------------

    // When the application starts (which invokes this function), prompt the user to enter manager info (name,employeeID,email,officeNumber)
    const promptForManagerInfo = () => {

        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter the manager's name",
                validate: async (input) => {
                    if (input === "") {
                        return "Please make sure you enter a name, and that your only using letters"
                    }
                    return true 
                }
            },
            {
                type: "input",
                name: "employeeID",
                message: "Please enter the manager's employee ID",
                validate: async (input) => {
                    if (input === "") {
                        return "Please make sure you enter a name, and that your only using letters"
                    }
                    return true 
                }
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the manager's email address",
                validate: async (input) => {
                    if (input === "") {
                        return "Please make sure you enter a name, and that your only using letters"
                    }
                    return true 
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Please enter the manager's office number",
                validate: async (input) => {
                    if (input === "") {
                        return "Please make sure you enter a name, and that your only using letters"
                    }
                    return true 
                }
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
                message: "Please enter the engineer's name",
                validate: async (input) => {
                    if (input === "") {
                        return "Please make sure you enter a name, and that your only using letters"
                    }
                    return true 
                }
            },
            {
                type: "input",
                name: "employeeID",
                message: "Please enter the engineer's employee ID",
                validate: async (input) => {
                    if (input === "") {
                        return "Please make sure you enter a name, and that your only using letters"
                    }
                    return true 
                }
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the engineer's email address",
                validate: async (input) => {
                    if (input === "") {
                        return "Please make sure you enter a name, and that your only using letters"
                    }
                    return true 
                }
            },
            {
                type: "input",
                name: "github",
                message: "Please enter the engineers Github user name",
                validate: async (input) => {
                    if (input === "") {
                        return "Please make sure you enter a name, and that your only using letters"
                    }
                    return true 
                }
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
                message: "Please enter the intern's name",
                validate: async (input) => {
                    if (input === "") {
                        return "Please make sure you enter a name, and that your only using letters"
                    }
                    return true 
                }
            },
            {
                type: "input",
                name: "employeeID",
                message: "Please enter the intern's employee ID",
                validate: async (input) => {
                    if (input === "") {
                        return "Please make sure you enter a name, and that your only using letters"
                    }
                    return true 
                }
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the intern's email address",
                validate: async (input) => {
                    if (input === "") {
                        return "Please make sure you enter a name, and that your only using letters"
                    }
                    return true 
                }
            },
            {
                type: "input",
                name: "school",
                message: "Please enter the interns's school",
                validate: async (input) => {
                    if (input === "") {
                        return "Please make sure you enter a name, and that your only using letters"
                    }
                    return true 
                }
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
// DEFINE SEQUENCE FOR ASYCHRONOUS LOGIC EXECUTION
//-------------------------------------------------------------------------------------------------------------------

    // (PROGRAM START) Start the program by creating a new manager (this is invoked with the init function at page bottom)
    const createManager = () => {

        // Upon start of application (createManager invoked) prompt user for manager information (and next steps selection)
        promptForManagerInfo()

            // Then, when manager information is completed, take the managerResponse..
            .then(response => {

                // Create a new manager instance and push to the global array for full team
                manager = new Manager (response.name, response.employeeID, response.email, response.officeNumber);
                fullTeam.push(manager);

                // Set the value of the nextStep global variable to the selected next steps
                nextStep = response.nextStep;
            })

            // Then (if the above is successful) If they want to create another employee, invoke the appropraite function ELSE begin the team profile generation process..
            .then( () => {

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

        // If function is invoked, promt the user to answer questions about their engineer...
        promptForEngineerInfo()

            // Then, when manager information is completed, take the EngineerResponse and..
            .then(response => {

                // Create a new Engineer instance and push to the global array for full team
                const engineer = new Engineer (response.name, response.employeeID, response.email, response.github);
                fullTeam.push(engineer);

                // Set the value of the nextStep global variable to the selected next steps
                nextStep = response.nextStep;
            })

            // Then (if the above is successful) If they want to create another employee, invoke the appropraite function ELSE begin the team profile generation process..
            .then( () => {
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

    // (IF SELECTED AS NEXT STEP) If the user selects to add an intern, create a new intern
    const createIntern = () => {

        // If function is invoked, promt the user to answer questions about their engineer...
        promptForInternInfo()
   
            // Then, when manager information is completed, take the EngineerResponse and..
            .then(response => {

                // Create a new Intern instance and push to the global array for full team... 
                const intern = new Intern (response.name, response.employeeID, response.email, response.school);
                fullTeam.push(intern);

                // Set the value of the nextStep global variable to the selected next steps
                nextStep = response.nextStep;
            })
   
            // Then (if the above is successful) If they want to create another employee, invoke the appropraite function ELSE begin the team profile generation process..
            .then( () => {
   
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


    // Once the user selects to finish building the team profile, build the profile in HTML....
    const createTeamProfile = () => {

        // First, For each item in the full team array loop through and create a "profile card" for them based on their role type...
        for ( i = 0; i<fullTeam.length; i++) {

            // If they are a manager...
            if (fullTeam[i].getRole() === "Manager") {

                // Create content for a manager card with their information...
                const managerCard = `
                    <div class="col">
                        <div class="card shadow rounded mx-3">
                            <div class="card-body text-center text-light bg-success">
                                <h5 class="card-title fs-3">${fullTeam[i].name}</h5>
                                <h6>Manager</h6>
                                <span class="fs-2"><i class="fab fa-black-tie"></i></span>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><span class="fw-bold">ID : </span><span>${fullTeam[i].employeeID}</span></li>
                                <li class="list-group-item"><span class="fw-bold">Email : </span><a href = "mailto:${fullTeam[i].email}">${fullTeam[i].email}</a></li>
                                <li class="list-group-item"><span class="fw-bold">Office # : </span><span>${fullTeam[i].officeNumber}</span></li>
                            </ul>
                        </div>
                    </div>
                `
                // And push that div into the array...
                finalProfileCardsArray.push(managerCard);
            }

            // If they are an engineer...
            else if (fullTeam[i].getRole() === "Engineer") {
                     
                // Create an engineer card with their information...
                const engineerCard = `
                    <div class="col">
                        <div class="card shadow rounded mx-3">
                            <div class="card-body text-center text-light bg-success">
                                <h5 class="card-title fs-3">${fullTeam[i].name}</h5>
                                <h6>Engineer</h6>
                                <span class="fs-2"><i class="fas fa-hard-hat"></i></i></span>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><span class="fw-bold">ID : </span><span>${fullTeam[i].employeeID}</span></li>
                                <li class="list-group-item"><span class="fw-bold">Email : </span><a href = "mailto:${fullTeam[i].email}">${fullTeam[i].email}</a></li>
                                <li class="list-group-item"><span class="fw-bold">Github : </span><a href = "https://www.github.com/${fullTeam[i].github}">${fullTeam[i].github}</a></li>
                            </ul>
                        </div>
                    </div>
                `
                // And push that div into the array...
                finalProfileCardsArray.push(engineerCard);
            }

            // If they are an Intern...
            else if (fullTeam[i].getRole() === "Intern") {
                     
                // Create an Intern card with their information...
                const internCard = `
                    <div class="col">
                        <div class="card shadow rounded mx-3">
                            <div class="card-body text-center text-light bg-success">
                                <h5 class="card-title fs-3">${fullTeam[i].name}</h5>
                                <h6>Intern</h6>
                                <span class="fs-2"><i class="fas fa-graduation-cap"></i></span>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><span class="fw-bold">ID : </span><span>${fullTeam[i].employeeID}</span></li>
                                <li class="list-group-item"><span class="fw-bold">Email : </span><a href = "mailto:${fullTeam[i].email}">${fullTeam[i].email}</a></li>
                                <li class="list-group-item"><span class="fw-bold">School : </span><span>${fullTeam[i].school}</span></li>
                            </ul>
                        </div>
                    </div>
                `
                // And push that card into the array
                finalProfileCardsArray.push(internCard);
            }
        }

        // After creating the profile cards, set the finalProfileCardsArrayJoined variable to the value of the finalProfileCardsArra being joined as a string...
        finalProfileCardsArrayJoined = finalProfileCardsArray.join("\n");

        // And create some base HTML with the joined string of html cards placed in the right location...
        createdHTML =`
        <!DOCTYPE html>
        <html lang="en">
            <!--Document Head-->
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <!--Bootstrap 5.0 CDN-->
                <link 
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" 
                    rel="stylesheet" 
                    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" 
                    crossorigin="anonymous"
                >
                <!--This is a google font awesome CDN-->
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                    crossorigin="anonymous"
                />
                <title>Team Profile</title>
            </head>
            <!--Document Body-->
            <body>
                <!--Navbar-->
                <nav class="navbar navbar-dark bg-secondary py-5 mb-3">
                    <span class="navbar-brand mb-0 h1 mx-auto fs-1">MyTeam <i class="fas fa-users"></i></span>
                </nav>
                <!--Main Section Page Container-->
                <div class = "container">
                    <!--Main Row (Holding All Cards)-->
                    <div class="row row-cols-1 row-cols-md-2 g-4 insertCards">
                        ${finalProfileCardsArrayJoined}
                    </div>
                </div>
                <!--Script Links-->
                    <!--Bootstrap 5.0 JS Bundle-->
                    <script 
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" 
                        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" 
                        crossorigin="anonymous">
                    </script>
            </body>
        </html>
        `
        
       // Lastly, call the writeProfile function to generate the html page with formatting and cards populated and place it in the specified directory...
        writeFileAsync("./rendered_files_html/teamportfolio.html", createdHTML)

            // Then log success if its successful, ....
            .then(() => console.log("Team Profile Has Been Created Successfully!"))

            // If there is an error, log the error...
            .catch(err => console.error(err)); 
    } 

    
//-------------------------------------------------------------------------------------------------------------------
// WRAP STARTING SEQUENCE INTO AN INIT FUNCTION
//-------------------------------------------------------------------------------------------------------------------

    // Invoke the createManager function, which starts the sequence of events to create a team profile
    const init = () => {
        //Reset values of arrays populated during program sequence to always ensure they are set to zero..
        masterEmployeeList = [];
        fullTeam = [];
        // And Call the first prompt asking for manager information..
        createManager();
    }

//-------------------------------------------------------------------------------------------------------------------
// START THE PROGRAM BY INVOKING THE INITFUNCTION
//-------------------------------------------------------------------------------------------------------------------

    // Invoke init (start the sequence)
    init();