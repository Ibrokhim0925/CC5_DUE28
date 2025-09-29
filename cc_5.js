// Step 2: Creating an array of employee objects
const employees = [
    { name: "Alice", hourlyRate: 25, hoursWorked: 38 },
    { name: "Nihan", hourlyRate: 30, hoursWorked: 45 },
    { name: "Charlie", hourlyRate: 20, hoursWorked: 50 },
    { name: "Kenan", hourlyRate: 45, hoursWorked: 42 }
];


// Step 3: Write a function of calculateBasePay
function calculateBasePay (hourlyRate, hoursWorked) {
    const regularHours = Math.min(hoursWorked, 40);
    return hourlyRate * regularHours;
}

console.log("--Testing calculateBasePay--");
console.log("Test 1 (under 40 hours):", calculateBasePay(22, 30));
console.log("Test 2 (over 40 hours):", calculateBasePay(25, 50));
console.log("\n");

// Step. 4: Writing a function of calculateOvertimePay
function calculateOvertimePay(hourlyRate, hoursWorked) {
    if (hoursWorked > 40) {
        const overtimeHours = hoursWorked - 40;
        const overtimeRate = hourlyRate * 1.5;
        return overtimeHours * overtimeRate;
    }
    return 0;
}

console.log("--Testing calculateOvertimePay--")
console.log("Test 1 (no overtime):", calculateOvertimePay(22, 32));
console.log("Test 2 (with overtime):", calculateOvertimePay(22, 42));
console.log("\n");

// Step 5: Writing and testing the calculateTaxes function
function calculateTaxes(grossPay) {
    const taxRate = .15;
    return grossPay * taxRate;
}

function calculatePayAfterTaxes(grossPay) {
    const taxAmount = calculateTaxes(grossPay);
    const netPay = grossPay - taxAmount;
    return netPay;
}

console.log("--Testing calculateTaxes and calculatePayAfterTaxes--")
console.log("Test 1 (net pay for $3000):", calculatePayAfterTaxes(3000));
console.log("\n");

// Step 6: Writing and testing the processPayroll function
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}

console.log("--Testing processPayroll (with Kenan's data)--");
const KenanPayroll = processPayroll(employees[3]);
console.log(KenanPayroll)
console.log("\n");
console.log("\n");

// Step 7: Loop through all employees and log the final report
console.log("---Final Payroll Report---");
for (const employee of employees) {
    const payrollReport = processPayroll(employee);
    console.log(`Report for: ${payrollReport.name}`);
    console.log(payrollReport);
}
console.log("---End of Report---")