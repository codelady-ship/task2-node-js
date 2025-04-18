import inquirer from "inquirer";

// Əvvəl istifadəçidən məlumatları alırıq
const userInfo = await inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Adınızı daxil edin:"
  },
  {
    type: "input",
    name: "surname",
    message: "Soyadınızı daxil edin:"
  },
  {
    type: "number",
    name: "age",
    message: "Yaşınızı daxil edin:"
  },
  {
    type: "confirm",
    name: "isStudent",
    message: "Siz tələbəsiniz?",
    default: true
  }
]);

// 5 suallıq quiz
const questions = [
  {
    type: "list",
    name: "q1",
    message: "1. JavaScript-də hansı dəyişən sabit dəyərə malik olur?",
    choices: ["var", "let", "const", "change"],
    correctAnswer: "const"
  },
  {
    type: "list",
    name: "q2",
    message: "2. `===` operatoru nəyi yoxlayır?",
    choices: ["Yalnız tip", "Yalnız dəyər", "Tip və dəyər", "Heç birini"],
    correctAnswer: "Tip və dəyər"
  },
  {
    type: "list",
    name: "q3",
    message: "3. Hansi array metodu element əlavə edir?",
    choices: ["push", "pop", "shift", "slice"],
    correctAnswer: "push"
  },
  {
    type: "list",
    name: "q4",
    message: "4. Node.js nədir?",
    choices: [
      "Server-side JavaScript platforması",
      "Brauzer",
      "Java kitabxanası",
      "C++ proqramı"
    ],
    correctAnswer: "Server-side JavaScript platforması"
  },
  {
    type: "list",
    name: "q5",
    message: "5. JavaScript hansı dildə yazılıb?",
    choices: ["C++", "Java", "C", "Assembly"],
    correctAnswer: "C"
  }
];

const answer = await inquirer.prompt(userInfo);
const answers = await inquirer.prompt(questions);

let score = 0;
questions.forEach((q, index) => {
  const qName = `q${index + 1}`;
  if (answers[qName] === q.correctAnswer) {
    score++;
  }
});

//netice
if (score === questions.length) {
  console.log(`baliniz ${score} dir. Təbriklər`);
} else if (score >= 3) {
  console.log(`baliniz ${score} dir.Yaxşı nəticə!`);
} else {
  console.log(`baliniz ${score}  dir.məşqə ehtiyac var.`);
}
