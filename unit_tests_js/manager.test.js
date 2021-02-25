//-------------------------------------------------------------------------------------------------------------------
// IMPORT FILES FOR TESTING
//-------------------------------------------------------------------------------------------------------------------

const Employee = require("../classes_js/employee_class");
const Manager = require("../classes_js/manager_class");

//-------------------------------------------------------------------------------------------------------------------
// WRITE UNIT TESTS
//-------------------------------------------------------------------------------------------------------------------

// Describe the class I want to test functionality for...
describe ("Manager class", () => {

    // Testing constructor for class
    describe("Manager constructor", () => {
        // Describe what it should do
        it("takes name, employeeID, email, and office number as arguments and creates a new object (instance of Manager)", () => {
            // Define some instance to test with
            const manager = new Manager ("Ryan", "1", "wryanj@email.com", "2");
            // Check that an object instance is created as expected
            expect(manager.name).toEqual("Ryan");
            expect(manager.employeeID).toEqual("1");
            expect(manager.email).toEqual("wryanj@email.com");
            expect(manager.officeNumber).toEqual("2");
        })
    })

    // Testing getName method for class
    describe("getName method", () => {
        // Describe what it should do
        it("returns the name passed in using a method defined in it's super", () => {
            // Define an instance of the object to test with
            const manager = new Manager ("Ryan", "1", "wryanj@email.com", "2");
            // Check that the function returns the expected behavior
            expect(manager.getName()).toEqual("Ryan");
        })
    })

    // Testing getID method for class
    describe("getID method", () => {
    // Describe what it should do
        it("returns the manager ID using method defined in its super", () => {
            // Define an instance of the object to test with
            const manager = new Manager ("Ryan", "1", "wryanj@email.com", "2");
            // Check that the function returns the expected behavior
            expect(manager.getID()).toEqual("1");
            })
    })

    // Testing getEmail method for class
    describe("getEmail method", () => {
    // Describe what it should do
        it("returns the manager email using the method defined in its super", () => {
            // Define an instance of the object to test with
            const manager = new Manager ("Ryan", "1", "wryanj@email.com", "2");
              // Check that the function returns the expected behavior
            expect(manager.getEmail()).toEqual("wryanj@email.com");
            })
    })

    // Testing getRole method for class
    describe("getRole method", () => {
    // Describe what it should do
        it("returns the manager role", () => { 
            // Define an instance of the object to test with
            const manager = new Manager ("Ryan", "1", "wryanj@email.com", "2");
            // Check that the function returns the expected behavior
            expect(manager.getRole()).toEqual("Manager");
            })
    })

    // Testing getOfficeNumber method for class
    describe("getOfficeNumber method", () => {
    // Describe what it should do
        it("returns the manager office number passed in", () => { 
            // Define an instance of the object to test with
            const manager = new Manager ("Ryan", "1", "wryanj@email.com", "2");
            // Check that the function returns the expected behavior
            expect(manager.getOfficeNumber()).toEqual("2");
            })
    })

})