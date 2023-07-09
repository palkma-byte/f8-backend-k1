let lyric =
  "Officia exercitation reprehenderit sint proident Lorem tempor cupidatat. Adipisicing pariatur qui ex ut sunt officia dolore officia pariatur anim culpa aliquip.";

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
}, 500);

setInterval(() => {
  document.body.innerHTML = "";
}, 499.9999999);
