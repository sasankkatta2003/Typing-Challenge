const main = document.querySelector(".main");
const typeArea = document.querySelector(".typingArea");
const btn = document.querySelector(".btn");

const words = [
  "Note", "right", "number", "four", "went", "earth", "umbrella", "spell", "leave", "very",
"Don't", "leave", "the", "dog", "away", "from", "the", "home", "its", "dangerous",
"need", "on", "cross", "three", "such", "work", "low", "part", "to", "ship", "specially",
"among", "live", "during", "often", "sound", "spell", "that", "five", "govern", "said", "that",
"Do", "words", "not", "random", "expect", "the", "those", "to", "type", "are",
"of", "object", "laugh", "people", "rock", "get", "king", "clear", "time", "man", "eventually",
"give", "and", "keyboard", "sunshine", "done", "eye", "keep", "main", "sound",
"everything", "south", "playing", "cross", "were", "came", "men", "his", "rock", "stock",
"show", "young", "good", "new", "technologies", "which", "common", "must", "would",
"stand", "hunderd", "minute", "but", "hour", "test", "over", "no", "stop",
"remember", "want", "still", "eight", "late", "her", "see", "wait", "halfcarry", "too",
"air", "ship", "four", "sound", "noun", "little", "dog", "that", "were", "perhaps",
"mark", "stand", "now", "cross", "step", "said", "cold", "take", "since", "that", "hold",
"front", "now", "feel", "at", "strong", "island", "rest", "man", "want", "map", "to", "travel",
];


main.textContent="Ready to type?";
typeArea.innerHTML = `Type here...`;
typeArea.disabled = true;


const game = {
  start: 0,
  end: 0,
  user: "",
  arrText: "",
};

btn.addEventListener("click", () => {
  if (btn.textContent === "Start") {
    play();
    typeArea.value = "";
    typeArea.disabled = false;
  } else if (btn.textContent === "Done") {
    typeArea.disabled = true;
    main.style.borderColor = "white";
    end();
  }
});

typeArea.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    typeArea.disabled = true;
    main.style.borderColor = "white";
    end();
  }
});

function play() {
  const selectedWords = [];
for (let i = 0; i < 15; i++) {
    const randIndex = Math.floor(Math.random() * words.length);
    selectedWords.push(words[randIndex]);
}
const selectedText = selectedWords.join("\n");
  main.textContent = selectedText;
  game.arrText = selectedText;
  main.style.borderColor = "#c8c8c8";
  btn.textContent = "Done";
  const duration = new Date();
  game.start = duration.getTime(); // unix timestamp
}

function end() {
  const duration = new Date();
  game.end = duration.getTime();
  const totalTime = (game.end - game.start) / 1000;
  game.user = typeArea.value;
  const correct = results();
  main.style.borderColor = "white";
  const val=((correct.score/correct.total)*100).toFixed(2);
  main.innerHTML = `Time: ${totalTime} Accuracy: ${val}% <br><span class="click-start">Click Start to Play again</span>`;
  btn.textContent = "Start";
}

function results() {
  const valueOne = game.arrText.trim().split(/\s+/);
    const valueTwo = game.user.trim().split(/\s+/);
  let score = 0;
  valueOne.forEach((word, idx) => {
    if (word === valueTwo[idx]) {
      score++;
    }
  });

  return { score, total: valueOne.length };
}
