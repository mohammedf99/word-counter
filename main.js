const paragraph = document.getElementById("paragraph");
const wordDiv = document.getElementById("word");
const btn = document.querySelector("button");

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
