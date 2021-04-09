const paragraph = document.getElementById("paragraph");
const wordDiv = document.getElementById("word");
const btn = document.querySelector("button");
const microphone = document.querySelector("#microphone");

paragraph.addEventListener("input", function (e) {
  paragraph.textContent = e.target.value;
  const words = paragraph.textContent.trim().split(" ");
  if (paragraph.textContent === "") {
    wordDiv.textContent = 0;
  } else {
    wordDiv.textContent = words.length;
  }
  console.log(paragraph);
  console.log(typeof paragraph.textContent);
});

microphone.addEventListener("click", function () {
  const speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";

  speech.text = paragraph.textContent;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
});
