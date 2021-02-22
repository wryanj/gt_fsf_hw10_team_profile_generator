//---------------------------------------------------------------------------------------------------------------
// Define Employee Class with Constructors
//---------------------------------------------------------------------------------------------------------------
 
    // Define Employee Class
    class Employee {
        
        // Define Class Constructor
        constructor (name, employeeID, email) {
            this.name = name;
            this.employeeID = employeeID;
            this.email = email;
        }

        // Define Class Methods

            // Method to return employee name
            getName (name) {
                return this.name
            }

            // Method to return employee ID
            getID (employeeID) {
                return this.employeeID
            }

            // Method to return employee email
            getID (email) {
                return this.email 
            }

            // Method to return employee role
            getRole() {
                return "Employee"
            }

    }

//---------------------------------------------------------------------------------------------------------------
// EXPORT THIS CLASS SO ITS METHODS AND PROPERTIES CAN BE ACCESSED FROM INDEX JS
//---------------------------------------------------------------------------------------------------------------

    // Export the Employee Class
    module.exports = Employee;