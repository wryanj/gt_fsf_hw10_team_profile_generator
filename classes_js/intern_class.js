//---------------------------------------------------------------------------------------------------------------
// IMPORT REQUIRED PARENT CLASS INFORMATION
//---------------------------------------------------------------------------------------------------------------

    // Import Parent Class
    const Employee = require("./employee_class");

//---------------------------------------------------------------------------------------------------------------
// DEFINE INTERN SUBCLASS
//---------------------------------------------------------------------------------------------------------------

    // Define Employee Class
    class Intern extends Employee {
        
        // Define Class Constructor
        constructor (name, employeeID, email, school) {
            super (name, employeeID, email);
            this.school = school;
        }

        // Define Class Methods

            // Returns the office number for a given Manager class
            getSchool () {
                return this.school;
            }

            // Returns the role for a given Manager class
            getRole() {
                return "Intern";
            }

    }

//---------------------------------------------------------------------------------------------------------------
// EXPORT THIS CLASS SO ITS METHODS AND PROPERTIES CAN BE ACCESSED FROM INDEX JS
//---------------------------------------------------------------------------------------------------------------

    // Export the Employee Class
    module.exports = Intern;

