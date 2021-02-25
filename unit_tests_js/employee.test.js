//-------------------------------------------------------------------------------------------------------------------
// IMPORT FILES FOR TESTING
//-------------------------------------------------------------------------------------------------------------------

const Employee = require("../classes_js/employee_class");

//-------------------------------------------------------------------------------------------------------------------
// WRITE UNIT TESTS
//-------------------------------------------------------------------------------------------------------------------

// Describe the class I want to test functionality for...
describe ("Employee class", () => {

    // Testing constructor for class
    describe("Employee constructor", () => {
        // Describe what it should do
        it("takes name,employeeID, and email as arguments and creates a new object (instance of employee)", () => {
            // Define some instance to test with
            const employee = new Employee ("Ryan", "1", "wryanj@email.com");
            // Check that an object instance is created as expected
            expect(employee.name).toEqual("Ryan");
            expect(employee.employeeID).toEqual("1");
            expect(employee.email).toEqual("wryanj@email.com");
        })
    })

    // Testing getName method for class
    describe("getName method", () => {
        // Describe what it should do
        it("returns the employee name", () => {
            // Define an instance of employee to test with
            const employee = new Employee ("Ryan", "1", "wryanj@email.com");
            // Check that getName reruns the name passed in
            expect(employee.getName()).toEqual("Ryan");
        })
    })

    // Testing getID method for class
    describe("getID method", () => {
    // Describe what it should do
        it("returns the employee ID", () => {
            // Define an instance of employee to test with
            const employee = new Employee ("Ryan", "1", "wryanj@email.com");
            // Check that getID reruns the name passed in
            expect(employee.getID()).toEqual("1");
            })
    })

    // Testing getI method for class
    describe("getEmail method", () => {
    // Describe what it should do
        it("returns the employee email", () => {
            // Define an instance of employee to test with
            const employee = new Employee ("Ryan", "1", "wryanj@email.com");
            // Check that getEmail reruns the name passed in
            expect(employee.getEmail()).toEqual("wryanj@email.com");
            })
    })

    // Testing getRole method for class
    describe("getRole method", () => {
    // Describe what it should do
        it("returns the employee role", () => { 
            // Define an instance of employee to test with
            const employee = new Employee ("Ryan", "1", "wryanj@email.com");
            // Check that getRole email returns the role hard coded in
            expect(employee.getRole()).toEqual("Employee");
            })
    })

})

//-------------------------------------------------------------------------------------------------------------------
// DEFINE TESTING OUTLINE (THIS SECTION IS INCLUDED FOR PURPOSE OF BETTER LEARNING JEST IN THIS ASSIGNMENT)
//-------------------------------------------------------------------------------------------------------------------

// Dependenceis
    // Always make sure you have jest in package.json, make sure you import the required class / js file you want to test from
    // ALSO - make sure you manually update your package.json
    // install jest when your in the testing directory (run the npm install jest)
    // to run test do npm run test "filename"

// Testing Outline
    // describe... (the class I want to test)

        // describe...(the constructor or methods within this class I want to Test) - Can be multiple

                // it...(enter what it should do) - Can be multiple

                    // Create the things to test with 

                    // Run the code / function using objects you created to test with and verify expected resullt