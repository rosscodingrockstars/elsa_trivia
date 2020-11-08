const mathProblems = [
  {
    question: "what is 7x9?",
    answerChoices: ["63", "72", "90", "79"],
    answer: "63",
    gif: "images/gif1.gif",
  },
  {
    question: "what is 12x12?",
    answerChoices: ["124", "100", "144", "112"],
    answer: "144",
    gif: "images/gif2.gif",
  },
  {
    question: "what is 72x4?",
    answerChoices: ["148", "200", "208", "288"],
    answer: "288",
    gif: "images/gif3.gif",
  },
  {
    question: "what is 5x11?",
    answerChoices: ["50", "55", "110", "45"],
    answer: "55",
    gif: "images/gif4.gif",
  },
  {
    question: "what is 9x17?",
    answerChoices: ["153", "108", "126", "97"],
    answer: "153",
    gif: "images/gif5.gif",
  },
  {
    question: "what is 4x6?",
    answerChoices: ["12", "16", "24", "36"],
    answer: "24",
    gif: "images/gif6.gif",
  },
  {
    question: "what is 97x4?",
    answerChoices: ["199", "307", "412", "388"],
    answer: "388",
    gif: "images/gif7.gif",
  },
  {
    question: "what is 123x5?",
    answerChoices: ["589", "568", "615", "613"],
    answer: "615",
    gif: "images/gif8.gif",
  },
  {
    question: "what is 812x2?",
    answerChoices: ["1579", "1509", "1628", "1624"],
    answer: "1624",
    gif: "images/gif9.gif",
  },
  {
    question: "what is 672 divided by 111",
    answerChoices: [
      "6.05405405402",
      "6.07895405405",
      "8.05405405305",
      "6.05405405405",
    ],
    answer: "6.05405405405",
    gif: "images/gif10.gif",
  },
];
$(".gif").hide();
$(".next").hide();
console.log(mathProblems[0].answers);
let questionCount = 0;
const Question = `
<form>
<h2>${mathProblems[questionCount].question}</h2>

<div class="form-check">
  <input class="form-check-input" type="radio" name="radios" id="Radios1" value="${mathProblems[questionCount].answerChoices[0]}" checked>
  <label class="form-check-label" for="Radios1">
  ${mathProblems[questionCount].answerChoices[0]}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radios" id="Radios2" value="${mathProblems[questionCount].answerChoices[1]}">
  <label class="form-check-label" for="Radios2">
    ${mathProblems[questionCount].answerChoices[1]}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radios" id="Radios3" value="${mathProblems[questionCount].answerChoices[2]}">
  <label class="form-check-label" for="Radios3">
  ${mathProblems[questionCount].answerChoices[2]}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radios" id="Radios4" value="${mathProblems[questionCount].answerChoices[3]}">
  <label class="form-check-label" for="Radios4">
  ${mathProblems[questionCount].answerChoices[3]}
  </label>
</div>
<button type="submit" class="submit btn btn-primary">Submit</button>
</form>`;

$(".question").append(Question);

console.log($("input:checked").val());
const answer = `${mathProblems[0].answer}`;
$(".submit").click(function (e) {
  e.preventDefault();
  if (answer === $("input:checked").val()) {
    $("form").hide();
    $(".answer-check").text("Congratulations, you got the right answer!");
    $(".gif").show();
    $(".next").show();
    $(".gif-container").append(
      $(".gif").attr("src", mathProblems[questionCount].gif)
    );
  } else {
    $("form").hide();
    $(".answer-check").text("Bummer, you got it wrong.");

    $(".gif").show();
    $(".gif-container").append(
      $(".gif").attr("src", mathProblems[questionCount].gif)
    );
    $(".next").show();
  }
});

$(".next").click(function (e) {
  e.preventDefault();
  questionCount++;
});
