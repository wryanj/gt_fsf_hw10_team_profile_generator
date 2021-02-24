//-------------------------------------------------------------------------------------------------------------------
// IMPORT FILES FOR TESTING
//-------------------------------------------------------------------------------------------------------------------
const Employee = require("../classes_js/employee_class");


//-------------------------------------------------------------------------------------------------------------------
// DEFINE TESTING OUTLINE (THIS SECTION IS INCLUDED FOR PURPOSE OF BETTER LEARNING JEST IN THIS ASSIGNMENT)
//-------------------------------------------------------------------------------------------------------------------
// Dependenceis
    // Always make sure you have jest in package.json, make sure you import the required class / js file you want to test from
    // install jest when your in the testing directory (run the npm install jest)
    // to run test do npm run test "filename"

// Testing Outline
    // describe... (the class I want to test)

        // describe...(the constructor or methods within this class I want to Test) - Can be multiple

                // it...(enter what it should do) - Can be multiple

                    // Create the things to test with

                    // Run the code / function using objects you created to test with

                    // Verify the expected results

//-------------------------------------------------------------------------------------------------------------------
// DEFINE UNIT TESTS
//-------------------------------------------------------------------------------------------------------------------

// Describe the class I want to test functionality for...
describe ("Employee class", () => {

    // Testing constructor for class
    describe("Employee constructor", () => {
        // Describe what it should do
        it("takes name,id, and email as agruments and creates a new object aka instance of Employee", () => {
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
            expect(employee.getNAme()).toEqual("Ryan");
        })
    })
})