//-------------------------------------------------------------------------------------------------------------------
// IMPORT FILES FOR TESTING
//-------------------------------------------------------------------------------------------------------------------

const Employee = require("../classes_js/employee_class");
const Intern = require("../classes_js/intern_class");

//-------------------------------------------------------------------------------------------------------------------
// WRITE UNIT TESTS
//-------------------------------------------------------------------------------------------------------------------

// Describe the class I want to test functionality for...
describe ("Intern class", () => {

    // Testing constructor for class
    describe("Intern constructor", () => {
        // Describe what it should do
        it("takes name, employeeID, email, and school as arguments and creates a new object (instance of Intern)", () => {
            // Define some instance to test with
            const intern = new Intern ("Ryan", "1", "wryanj@email.com","school");
            // Check that an object instance is created as expected
            expect(intern.name).toEqual("Ryan");
            expect(intern.employeeID).toEqual("1");
            expect(intern.email).toEqual("wryanj@email.com");
            expect(intern.school).toEqual("school");
        })
    })

    // Testing getName method for class
    describe("getName method", () => {
        // Describe what it should do
        it("returns the name passed in using a method defined in it's super", () => {
            // Define an instance of the object to test with
            const intern = new Intern ("Ryan", "1", "wryanj@email.com","school");
            // Check that the function returns the expected behavior
            expect(intern.getName()).toEqual("Ryan");
        })
    })

    // Testing getID method for class
    describe("getID method", () => {
    // Describe what it should do
        it("returns the Intern ID using method defined in its super", () => {
            // Define an instance of the object to test with
            const intern = new Intern ("Ryan", "1", "wryanj@email.com", "school");
            // Check that the function returns the expected behavior
            expect(intern.getID()).toEqual("1");
            })
    })

    // Testing getEmail method for class
    describe("getEmail method", () => {
    // Describe what it should do
        it("returns the intern email using the method defined in its super", () => {
            // Define an instance of the object to test with
            const intern = new Intern ("Ryan", "1", "wryanj@email.com", "school");
              // Check that the function returns the expected behavior
            expect(intern.getEmail()).toEqual("wryanj@email.com");
            })
    })

    // Testing getRole method for class
    describe("getRole method", () => {
    // Describe what it should do
        it("returns the Intern role", () => { 
            // Define an instance of the object to test with
            const intern = new Intern ("Ryan", "1", "wryanj@email.com", "school");
            // Check that the function returns the expected behavior
            expect(intern.getRole()).toEqual("Intern");
            })
    })

    // Testing getSchool method for class
    describe("getSchool method", () => {
    // Describe what it should do
        it("returns the interns school name passed in", () => { 
            // Define an instance of the object to test with
            const intern = new Intern ("Ryan", "1", "wryanj@email.com", "school");
            // Check that the function returns the expected behavior
            expect(intern.getSchool()).toEqual("school");
            })
    })

})