//Todo Question 1: Create an array of 5 elements using the Array Constructor.

const array1 = new Array("Neeraj", "John", "Bob", "Daniel", "Tom");
console.log(array1);

//Todo Question 2: Create an array of 3 empty slots.

const array2 = new Array(3);
console.log(array2);

//Todo Question 3: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.

const array3 = ["A", "B", "C", "D", "E", "F"];
console.log(array3[array3.length - 3]);

//Todo Question 4: Use the for loop on the above array to print elements in the odd index.
console.log("Question 4");
for (let i = 0; i < array3.length; i++) {
  if (i % 2 !== 0) {
    console.log(array3[i]);
  }
}

//Todo Question 5: Add one element at the front and the end of an array.
console.log("Question 5");
const array4 = ["P", "Q", "R", "S", "T", "U"];
array4.unshift("Start");
array4.push("End");
console.log(array4);
//Todo Question 6: Remove an element from the front and the end of an array.
console.log("Question 6");
// array4.shift();
// array4.pop();
// console.log(array4);

//or
const frontRemoved = array4.shift();
const endRemoved = array4.pop();
console.log("removed", frontRemoved, endRemoved);
console.log("Update array is", array4);

//Todo Question 7: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

console.log("Question 7");

const favouriteFoods = [
  "Chicken",
  "Paneer",
  "Malai Chaap",
  "Idli",
  "Dosa",
  "Biryani",
  "Fish",
  "Egg Roll",
  "Burger",
  "Pizza",
];
// const [,,,,,eatToday,,,,,] = favouriteFoods // or
const [, , , , , eatToday, ...rest] = favouriteFoods;
console.log(eatToday);

//Todo Question 8: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
console.log("Question 8");
const [, , ...last8FoodItems] = favouriteFoods;
console.log("last 8 food items:", last8FoodItems);

//Todo Question 9: Clone an Array(Shallow cloning)
console.log("Question 9");

const cloneFavouriteFood = [...favouriteFoods]; // or
// const cloneFavouriteFood = favouriteFoods.slice()
console.log(cloneFavouriteFood);

//Todo Question 10: Empty an array using its length property
console.log("Question 10");

favouriteFoods.length = 0;
console.log(favouriteFoods);

//Todo Question 11:
//Todo Question 12:
//Todo Question 13:

/**Employee Question 21 to 48 */

console.log("QUESTION 21 - 48");

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

// TODO QUESTION 21:  Can you filter employees who work in the "Engineering" department?

employees.forEach((emp) => {
  if (emp.departmentId === 2) {
    console.log(
      `${emp.name} works in ${
        emp.departmentId === 2 ? "engineering" : "Other Department"
      }`
    );
  }
});

console.log("QQUESTION 22");
// TODO QUESTION 22: Create a new array that combines employee names and department names in the format: "Alice (HR)".

const employeeWithDepartment = employees.map((emp) => {
  const employeName = emp.name;
  departments.forEach((department) => {
    if (emp.departmentId === department.id) {
      console.log(`${employeName} (${department.name})`);
    }
  });
});

console.log("QUESTION 23");
// TODO QUESTION 23: Find the highest salary among employees.
const salary = employees.map((emp) => emp.salary);
// const highestSalary = Math.max(...salary)
/**OR */
const highestSalary = salary.reduce((a, b) => (a > b ? a : b));
console.log("Highest salary:", highestSalary);

// TODO QUESTION 24: Check if there is at least one employee in the "Sales" department.

const empId = departments.find((emp) => emp.name === "Sales").id;

const salesEmployee = employees.filter((emp) => emp.departmentId === empId);
if (salesEmployee.length > 0) {
  console.log(
    `yes, there are ${salesEmployee.length} employees in the sales Department`
  );
}
/**OR it can also be checked using .some method */

const hasSalesEmployee = employees.some((emp) => emp.departmentId === empId);
// console.log(hasSalesEmployee)
if (hasSalesEmployee) {
  console.log("Yes, there are employee in sales department");
} else {
  console.log("No, there are No employee in sales department");
}

console.log("QUESTION 25");
// TODO QUESTION 25: Write a function to filter employees earning more than 6000.

const employeeMoreThan6000 = employees.filter((emp) => emp.salary > 6000);
console.log(employeeMoreThan6000);
console.log(
  `There are ${employeeMoreThan6000.length} employees Earning more than 6000`
);
employeeMoreThan6000.forEach((emp) => {
  console.log(`${emp.name} Earns ${emp.salary}`);
});

console.log("QUESTION 26");
// TODO QUESTION 26:  Create an array of employee names only.

const employeeNames = employees.map((emp) => emp.name);
console.log(employeeNames);

console.log("QUESTION 27");
// TODO QUESTION 27: Calculate the total salary of all employees using

const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log(`Total salary of all the employees is: ${totalSalary}`);

console.log("QUESTION 28");
// TODO QUESTION 28: Is there any employee earning less than 5000?

const employeeEarningLessThan5000 = employees.some((emp) => emp.salary < 5000);
console.log(
  `${
    employeeEarningLessThan5000
      ? "Yes there are employees earning less than 5000"
      : " No there are not any employees earning less than 5000"
  }`
);

/**If needed to count the number of employee earning less than 5000 we can use filter method */

const employeeEarningLessThan5000UsingFilter = employees.filter(
  (emp) => emp.salary < 5000
);
console.log(
  `${
    employeeEarningLessThan5000UsingFilter.length > 0
      ? `There are ${employeeEarningLessThan5000UsingFilter.length} employees earning less than 5000`
      : "No, there are not any employees earning less thn 5000"
  }`
);

console.log("QUESTION 29");
// TODO QUESTION 29: Find the first employee who earns exactly 5100.

const firstEmployee5100 = employees.find((emp) => emp.salary === 5100);
if (firstEmployee5100) {
  console.log(`${firstEmployee5100.name} earns exactly 5100`);
} else {
  console.log("No employee earns exactly 5100.");
}

console.log("QUESTION 30");
// TODO QUESTION 30: Find the last employee in the "HR" department.
const eID = departments.find((emp) => emp.name === "HR").id;
const lastEmp = employees.filter((emp) => emp.departmentId === eID).pop();
console.log(lastEmp);
console.log(
  `Last Employee in HR Department is: ${lastEmp.name} with a salary of ${lastEmp.salary} and employeeId ${lastEmp.id}`
);

console.log("QUESTION 31");
// TODO QUESTION 31: Find the first employee in the "Marketing" department.

const marketingEmployeeId = departments.find((emp) => emp.name === "Marketing");
if (marketingEmployeeId) {
  const firstEmployee = employees.find(
    (emp) => emp.departmentId === marketingEmployeeId.id
  );
  console.log(
    `The first employee in Marketing department is: ${firstEmployee.name} with an employee id of ${firstEmployee.id} with a lucrative salary of ${firstEmployee.salary}`
  );
}

console.log("QUESTION 32");
// TODO QUESTION 32: Check if all employees earn more than 4000.

const allEmployees = employees.every((emp) => emp.salary > 4000);
if (allEmployees) {
  console.log("Yes, all employees earns more than 4000");
} else {
  console.log(
    "No, not all employees are that fortunate to earn more than 4000"
  );
}

console.log("QUESTION 33");
//TODO QUESTION 33: Find the first employee in the "Sales" and "HR" department.

const salesId = departments.find((emp) => emp.name === "Sales");
const hrId = departments.find((emp) => emp.name === "HR");

if (salesId && hrId) {
  const firstEmpSales = employees.find(
    (emp) => emp.departmentId === salesId.id
  );

  const firstHREmp = employees.find((emp) => emp.departmentId === hrId.id);
  console.log(
    `First emplyee in Sales Department is: ${firstEmpSales.name}, with an employeeId of ${firstEmpSales.id} at a lucrative salary of ${firstEmpSales.salary} `
  );

  console.log(
    `First emplyee in HR Department is: ${firstHREmp.name}, with an employeeId of ${firstHREmp.id} at a lucrative salary of ${firstHREmp.salary} `
  );
}

console.log("QUESTION 34");

//TODO QUESTION 34: Verify if all employees belong to a department listed in the departments array.

const depart = departments.map((dept) => dept.id);
const allEmp = employees.every((emp) => depart.includes(emp.departmentId));
if (allEmp) {
  console.log(
    "All employees belong to a department listed in the departments array"
  );
} else {
  console.log("Some employees belong to invalid or unlisted departments.");
}

console.log("QUESTION 35");
//TODO QUESTION 35: Log each employee's name and department name to the console.

const empNames = employees.forEach((emp) => {
  departments.map((dept) => {
    if (dept.id === emp.departmentId) {
      // console.log(`Employee Name: ${emp.name}, Department Name:${dept.name}`);
      return console.log({ EmployeeName: emp.name, Department: dept.name });
    }
  });
});
console.log("QUESTION 36");
//TODO QUESTION 36: Extract all employee names into a single array.
const allEmployeeToArray = employees.map((emp) => emp.name);
console.log(allEmployeeToArray);
console.log("QUESTION 37");
//TODO QUESTION 3: Increment each employee's salary by 10%

// const increment = employees.map(
//   (emp) => (emp.salary = emp.salary + 0.1 * emp.salary)
// );
// console.log(increment);
// console.log(employees);
console.log("QUESTION 38");
//TODO QUESTION 38: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
const employeeSkills = [
  { name: "Alice", skills: ["Excel", "Management", "Teamwork"] },
  { name: "Bob", skills: ["JavaScript", "React", "Node.js"] },
  { name: "Charlie", skills: ["Python", "Data Analysis", "Pandas"] },
  { name: "Diana", skills: ["Leadership", "Communication", "Scheduling"] },
  { name: "Edward", skills: ["TypeScript", "System Design", "MongoDB"] },
  { name: "Fiona", skills: ["Design Thinking", "UI/UX", "Figma"] },
  { name: "George", skills: ["C++", "Algorithms", "Problem Solving"] },
  { name: "Helen", skills: ["Photoshop", "Creative Writing", "SEO"] },
  { name: "Ian", skills: ["Git", "Testing", "Debugging"] },
  { name: "Jane", skills: ["Documentation", "Excel", "Coordination"] },
];

const skills = employeeSkills.map((emp) => emp.skills);
console.log(skills.flat());

console.log("QUESTION 39");
//TODO QUESTION 39: Find the total salary of all employees working in the "Engineering" department.
const engId = departments.find((dept) => dept.name === "Engineering");
if (engId) {
  const totalEngEmpSalary = employees
    .filter((emp) => emp.departmentId === engId.id)
    .map((emp) => emp.salary)
    .reduce((acc, salary) => acc + salary, 0);

  console.log(totalEngEmpSalary);

  console.log(
    `Total salary of Engineering Department is: ${totalEngEmpSalary}`
  );
} else {
  console.log("No employess found in Engineering Department");
}
console.log("QUESTION 40");
//TODO QUESTION 40: Check if there is any department where all employees earn more than 5000.

departments.forEach((dept) => {
  const employee = employees
    .filter((emp) => emp.departmentId === dept.id)
    .every((emp) => emp.salary > 5000);
  console.log(dept.name);
  if (employee) {
    console.log(`All employees of ${dept.name} Earns more than 5000`);
  } else {
    console.log(`All employees of ${dept.name} does not Earns more than 5000`);
  }
});

console.log("QUESTION 41");
//TODO QUESTION 41: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.

const employeesWithProjects = [
  { id: 1, name: "Alice", projects: ["Project A", "Project B"] },
  { id: 2, name: "Bob", projects: ["Project C", "Project D"] },
  { id: 3, name: "Charlie", projects: ["Project A", "Project E"] },
  { id: 4, name: "Diana", projects: ["Project F", "Project B"] },
  { id: 5, name: "Edward", projects: ["Project G"] },
  { id: 6, name: "Fiona", projects: ["Project H", "Project C"] },
  { id: 7, name: "George", projects: ["Project I", "Project J"] },
  { id: 8, name: "Helen", projects: ["Project K", "Project A"] },
  { id: 9, name: "Ian", projects: ["Project D", "Project L"] },
  { id: 10, name: "Jane", projects: ["Project M", "Project E"] },
];

const allProjects = employeesWithProjects.map((emp) => emp.projects).flat();
const uniqueProjects = [];

allProjects.forEach((pr) => {
  if (!uniqueProjects.includes(pr)) {
    uniqueProjects.push(pr);
  }
});

console.log(
  `Total number of Unique Projects handled across all the employees are: ${uniqueProjects.length}`
);
console.log(uniqueProjects);

console.log("QUESTION 42");
//TODO QUESTION 42: For each employee, find their department name and return an array of employee names with their department names.
const employeeArray = employees.map((emp) => {
  const departmentName = departments.find(
    (dept) => emp.departmentId === dept.id
  ).name;
  return { name: emp.name, department: departmentName };
});

console.log(employeeArray);

console.log("QUESTION 43");
//TODO QUESTION 43: Get a list of names of employees earning more than 6000.
const employeeList = employees
  .filter((emp) => emp.salary > 6000)
  .map((emp) => emp.name);

console.log(employeeList);

console.log("QUESTION 43");
//TODO QUESTION 44: Write a for-of loop to print the names of all employees from the employees array.

for (let emp of employees) {
  console.log(emp.name);
}

console.log("QUESTION 44");
//TODO QUESTION 45: Using a for-of loop, print the names of employees earning more than 5000.

for (let emp of employees) {
  if (emp.salary > 5000) {
    console.log(`${emp.name} earns more than 5000`);
  }
}

console.log("QUESTION 45");
//TODO QUESTION 46: Modify the for-of loop to destructure each employee object and log their name and salary.

for (const { name, salary } of employees) {
  console.log(`Name: ${name}, Salary: ${salary} `);
}

console.log("QUESTION 46");
//TODO QUESTION 47: Write a for-of loop to match employees with their departments and print the results.

for (const emp of employees) {
  for (const dept of departments) {
    if (dept.id === emp.departmentId) {
      console.log(`${emp.name} is in ${dept.name}`);
    }
  }
}

console.log("QUESTION 47");
//TODO QUESTION 48: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.
const bv = employees.map((emp) => emp.name).flat();

for (const [i, name] of bv.entries()) {
  console.log(`Employee ${i + 1} : ${name}`);
}

console.log("QUESTION 48");
//TODO QUESTION 49: Given the array-like object below, access the second element and log it:

/**const arrayLike = { 0: "First", 1: "Second", length: 2 }; */

const arrayLike = { 0: "First", 1: "Second", length: 2 };

console.log(arrayLike[1]);

console.log("QUESTION 49");
//TODO QUESTION 50:
console.log("QUESTION 50");

// TODO Question 57: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.

const arr = [3, 7, 3, 2, 3, 8, 7, 7];

const freq = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(freq);

const maximumFreq = Math.max(...Object.values(freq))
console.log(maximumFreq)

const mostFrequent = Object.keys(freq)
  .filter(key => freq[key] === maximumFreq)
  .map(Number);

console.log("Most repeated numbers:", mostFrequent);
console.log("Frequency:", maximumFreq);



