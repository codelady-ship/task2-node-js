//3. terminalda ci-ci-ko (rock paper scissors) (taş kağıt makas)

import inquirer from "inquirer";

const choices = ["Rock", "Paper", "Scissors"];

const userChoice = await inquirer.prompt([
  {
    type: "list",
    name: "choice",
    message: "Taş, Kağıt, Makas >Hansını seçirsiniz?",
    choices: ["Rock", "Paper", "Scissors"],
  }
]);

const computerChoice = choices[Math.floor(Math.random() * choices.length)];

console.log(`Siz: ${userChoice.choice}`);
console.log(`Kompüter: ${computerChoice}`);

// Nəticə
function Winner(user, computer) {
  if (user === computer) {
    return "Heç-heçə!";
  } else if (
    (user === "Rock" && computer === "Scissors") ||(user === "Paper" && computer === "Rock") ||(user === "Scissors" && computer === "Paper")
  ) {
    return "Qələbə qazandınız!";
  } else {
    return "Kompüter qazandı!";
  }
}

const result = Winner(userChoice.choice, computerChoice);
console.log(result);
