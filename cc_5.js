// Step 2: Creating an array of employee objects
const employees = [
    { name: "Alice", hourlyRate: 25, hoursWorked: 38 },
    { name: "Bob", hourlyRate: 30, hoursWorked: 45 },
    { name: "Charlie", hourlyRate: 20, hoursWorked: 50 },
    { name: "Diana", hourlyRate: 45, hoursWorked: 40 }
];


// Step 3: Write a function of calculateBasePay
function calculateBasePay (hourlyRate, hoursWorked) {
    const regularHours = Math.min(hoursWorked, 40);
    return hourlyRate * regularHours;
}

console.log("Testing calculateBasePay");
console.log("Test 1: (under 40 hours):", calculateBasePay(22, 30));
console.log("Test 2: (over 40 hours):", calculateBasePay(25, 50));
console.log("\n");

