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

            // Get name method that takes a name as an argument, and sets it as the name for this class instance
            getName (name) {
                return this.name
            }

            // Get id method that takes an employeeID as an argument, and sets it to the employeeID for this class instance
            getID (employeeID) {
                return this.employeeID
            }

            
            // Get id method that takes an email as an argument, and sets it to the email for this class instance
            getID (email) {
                return this.email 
            }

            getRole() {
                return "Employee"
            }

    }

//---------------------------------------------------------------------------------------------------------------
// EXPORT THIS CLASS SO ITS METHODS AND PROPERTIES CAN BE ACCESSED FROM INDEX JS
//---------------------------------------------------------------------------------------------------------------

    // Export the Employee Class
    module.exports = Employee;