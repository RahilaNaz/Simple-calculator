import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "Firstnumber" },
  { message: "Enter your second number", type: "number", name: "Secondnumber" },
  {
    message: "Select one of operator to perfom action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Devision"],
  },
]);
//conditional statment
if (answer.operator === "Addition") {
  console.log(answer.Firstnumber + answer.Secondnumber);
}
else if (answer.operator === "Substraction") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
else{"Please select correct operator"}