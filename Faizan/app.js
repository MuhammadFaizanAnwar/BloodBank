// initialize variables
var questionID,
  question,
  choiceA,
  choiceB,
  userChoice,
  questions,
  numQuestions,
  qInfo,
  current = 0,
  score = 0,
  points = [];

var defaultQuestions = [
  {
    question: "Are you under 18 years old?",

  },
  {
    question: "Are you over 75 years old?",

  },
  {
    question: "Had a tattoo in the last 4 months?",

  },
  {
    question: "Pregnant or just given birth?",

  },
  {
    question: "Have a heart condition?",

  },
  {
    question: "Low in iron?",

  },
  {
    question: "Engaged in 'at risk' sexual activity in the past 12 months?",

  },
  {
    question: "Injected recreational drugs in the past 5 years?",

  },
  {
    question: "Going overseas in the 4 months before your donation?",
  }
];

var elQuestion = document.getElementById("question");
document.getElementById("choiceA").onclick = function () {
  endScenario(false);
}
document.getElementById("choiceB").onclick = function () {
  if (current == questions.length - 1) {
    endScenario(true);
  } else {
    // next question
    current++;
    renderQuestion();
  }
}

document.getElementById("success-startover").onclick = function () {
  startOverScenario(true);
}

document.getElementById("fail-startover").onclick = function () {
  startOverScenario(false);
}

document.getElementById("success-register").onclick = function () {
  window.open("Registration.html", '_self');

}

document.getElementById("fail-register").onclick = function () {
  window.open("Registration.html", '_self');

}

function startOverScenario(scenario) {

  if (scenario) {
    document.getElementById("success").style.display = "none";
  } else {
    document.getElementById("failure").style.display = "none";
  }

  document.getElementById("main-div").style.display = "block";
  current = 0;
  renderQuestion();
}

// start quiz
populateQuestions();
renderQuestion();

function populateQuestions() {
  // populate with default questions
  questions = defaultQuestions;
  // if local storage contains questions, add to question set
  if (localStorage.getItem("questions")) {
    var storedQuestions = JSON.parse(localStorage.getItem("questions"));
    for (var i = 0; i < storedQuestions.length; i++) {
      questions.push(storedQuestions[i]);
    }
  }
  numQuestions = questions.length;
}

function renderQuestion() {
  questionID = current + 1;
  populateQuestionInfo();
  elQuestion.innerHTML = question;
}

function populateQuestionInfo() {
  question = questions[current].question;
  qInfo = questions[current];
}

function endScenario(endCase) {
  if (endCase) {
    document.getElementById("main-div").style.display = "none";
    document.getElementById("success").style.display = "block";

  } else {
    document.getElementById("main-div").style.display = "none";
    document.getElementById("failure").style.display = "block";
  }
}
