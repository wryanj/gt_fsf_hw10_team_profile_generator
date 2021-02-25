//-------------------------------------------------------------------------------------------------------------------
// IMPORT FILES FOR TESTING
//-------------------------------------------------------------------------------------------------------------------

const Employee = require("../classes_js/employee_class");
const Engineer = require("../classes_js/engineer_class");

//-------------------------------------------------------------------------------------------------------------------
// WRITE UNIT TESTS
//-------------------------------------------------------------------------------------------------------------------

// Describe the class I want to test functionality for...
describe ("Engineer class", () => {

    // Testing constructor for class
    describe("Engineer constructor", () => {
        // Describe what it should do
        it("takes name, employeeID, email, and github as arguments and creates a new object (instance of Engineer)", () => {
            // Define some instance to test with
            const engineer = new Engineer ("Ryan", "1", "wryanj@email.com", "wryanj");
            // Check that an object instance is created as expected
            expect(engineer.name).toEqual("Ryan");
            expect(engineer.employeeID).toEqual("1");
            expect(engineer.email).toEqual("wryanj@email.com");
            expect(engineer.github).toEqual("wryanj");
        })
    })

    // Testing getName method for class
    describe("getName method", () => {
        // Describe what it should do
        it("returns the name passed in using a method from it's super", () => {
            // Define an instance of the object to test with
            const engineer = new Engineer ("Ryan", "1", "wryanj@email.com", "wryanj");
            // Check that the function returns the expected behavior
            expect(engineer.getName()).toEqual("Ryan");
        })
    })

    // Testing getID method for class
    describe("getID method", () => {
    // Describe what it should do
        it("returns the employee ID using method defined in its super", () => {
            // Define an instance of the object to test with
            const engineer = new Engineer ("Ryan", "1", "wryanj@email.com", "wryanj");
            // Check that the function returns the expected behavior
            expect(engineer.getID()).toEqual("1");
            })
    })

    // Testing getEmail method for class
    describe("getEmail method", () => {
    // Describe what it should do
        it("returns the employee email", () => {
            // Define an instance of the object to test with
            const engineer = new Engineer ("Ryan", "1", "wryanj@email.com", "wryanj");
              // Check that the function returns the expected behavior
            expect(engineer.getEmail()).toEqual("wryanj@email.com");
            })
    })

    // Testing getRole method for class
    describe("getRole method", () => {
    // Describe what it should do
        it("returns the engineer role", () => { 
            // Define an instance of the object to test with
            const engineer = new Engineer ("Ryan", "1", "wryanj@email.com", "wryanj");
            // Check that the function returns the expected behavior
            expect(engineer.getRole()).toEqual("Engineer");
            })
    })

    // Testing getGithub method for class
    describe("getGithub method", () => {
    // Describe what it should do
        it("returns the engineer github profile name passed in", () => { 
            // Define an instance of the object to test with
            const engineer = new Engineer ("Ryan", "1", "wryanj@email.com", "wryanj");
            // Check that the function returns the expected behavior
            expect(engineer.getGithub()).toEqual("wryanj");
            })
    })

})
