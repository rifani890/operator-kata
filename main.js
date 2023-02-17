const wordsTextarea = document.querySelector(".word-counter-container .words");
const countBtn = document.querySelector(".word-counter-container .count-btn");
const wordCount = document.querySelector(".word-counter-container .word-count span");

const countWords = () => {
  let words = wordsTextarea.value;
  let wordsTrimmed = words.replace(/\s+/g, " ").trim();
  let splitWords = wordsTrimmed.split(" ");

  console.log(splitWords);

  let numberOfWords = splitWords.length;
  if (splitWords[0] == "") {
    numberOfWords = 0;
  }

  let percentage = (numberOfWords * 100) / 100; // mengalikan jumlah kata dengan 100 dan membaginya dengan 100
  wordCount.innerHTML = percentage.toFixed(2) + "%"; // menampilkan persentase dengan 2 angka di belakang koma
};
