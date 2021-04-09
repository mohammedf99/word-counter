const paragraph = document.getElementById("paragraph");
const btn = document.querySelector("button");

paragraph.addEventListener("input", function (e) {
  paragraph.textContent = e.target.value;
  const words = paragraph.textContent.split(" ");
  console.log(words.length);

  console.log(paragraph);
});

// const words = paragraph.split(" ");
