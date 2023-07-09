let lyric =
  "Incididunt culpa deserunt ut est dolore aute enim. Minim ut ex nostrud ea in fugiat velit exercitation cillum. Aliquip irure est dolore laboris reprehenderit aliquip veniam est laboris minim laborum reprehenderit. Laborum ut dolore cupidatat dolore Lorem magna Lorem eu deserunt do velit est anim. Minim sint deserunt deserunt sit sit culpa consectetur.";

let words = lyric.split(" ");
numWord = lyric.split(" ").length;
console.log(numWord);

let i = 0;
// let highlightWord = lyric.split(" ")[i],
let lyricDisplay = "",
  lyricLeft = "",
  lyricRight = lyric;

setInterval(() => {
  if (lyricRight == words[numWord - 1]) {
    lyricRight = "";
  }
  let highlightWord = words[i];
  console.log(highlightWord);
  if (lyricLeft == lyric + " ") {
    lyricLeft = "";
  }

  lyricRight = lyricRight.replace(highlightWord + " ", "");

  lyricDisplay =
    lyricLeft + "<span id ='hl'> " + highlightWord + " </span>" + lyricRight;

  lyricLeft += highlightWord + " ";

  console.log(lyricDisplay);
  console.log(i);

  document.write(lyricDisplay);
  document.getElementById("hl").style.color = "red";

  if (lyricLeft == "") {
    lyricLeft = lyric;
  }
  i++;
  if (i === numWord) {
    i = 0;
  }
  if (lyricRight == "") {
    lyricRight = lyric;
  }

  setTimeout(() => {
    document.body.innerHTML = "";
  }, 480);
}, 500);
