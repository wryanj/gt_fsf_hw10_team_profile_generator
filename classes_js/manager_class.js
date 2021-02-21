
//---------------------------------------------------------------------------------------------------------------
// IMPORT REQUIRED PARENT CLASS INFORMATION
//---------------------------------------------------------------------------------------------------------------

    // Import Parent Class
    const Employee = require("./employee_class");

//---------------------------------------------------------------------------------------------------------------
// DEFINE MANAGER SUBCLASS
//---------------------------------------------------------------------------------------------------------------

    // Define Employee Class
    class Manager extends Employee {
        
        // Define Class Constructor
        constructor (name, employeeID, email, officeNumber) {
            super (name, employeeID, email);
            this.officeNumber = officeNumber;
        }

        // Define Class Methods

            // Returns the office number for a given Manager class
            getOfficeNumber () {
                return this.officeNumber;
            }

            // Returns the role for a given Manager class
            getRole() {
                return "Manager";
            }

    }

//---------------------------------------------------------------------------------------------------------------
// EXPORT THIS CLASS SO ITS METHODS AND PROPERTIES CAN BE ACCESSED FROM INDEX JS
//---------------------------------------------------------------------------------------------------------------

    // Export the Employee Class
    module.exports = Manager;