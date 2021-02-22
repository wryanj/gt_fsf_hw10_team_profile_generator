//---------------------------------------------------------------------------------------------------------------
// IMPORT REQUIRED PARENT CLASS INFORMATION
//---------------------------------------------------------------------------------------------------------------

    // Import Parent Class
    const Employee = require("./employee_class");

//---------------------------------------------------------------------------------------------------------------
// DEFINE ENGINEER SUBCLASS
//---------------------------------------------------------------------------------------------------------------

    // Define Employee Class
    class Engineer extends Employee {
        
        // Define Class Constructor
        constructor (name, employeeID, email, github) {
            super (name, employeeID, email);
            this.github = github;
        }

        // Define Class Methods

            // Returns the office number for a given Manager class
            getGithub () {
                return this.github;
            }

            // Returns the role for a given Manager class
            getRole() {
                return "Engineer";
            }

    }

//---------------------------------------------------------------------------------------------------------------
// EXPORT THIS CLASS SO ITS METHODS AND PROPERTIES CAN BE ACCESSED FROM INDEX JS
//---------------------------------------------------------------------------------------------------------------

    // Export the Employee Class
    module.exports = Engineer;