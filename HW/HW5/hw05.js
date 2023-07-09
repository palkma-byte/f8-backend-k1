/**
 *
 *  Không dùng array nên nhiều lỗi chưa fix đc :v
 *
 *
 *
 *
 */

let lyric =
  "Officia exercitation reprehenderit sint proident Lorem tempor cupidatat. Adipisicing pariatur qui ex ut sunt officia dolore officia pariatur anim culpa aliquip.";

let words = lyric.split(" ");
numWord = lyric.split(" ").length;
console.log(numWord);

let i = 0;
// let highlightWord = lyric.split(" ")[i],
let lyricDisplay = "",
  lyricLeft = lyric; //

setInterval(() => {
  let highlightWord = words[i];
  console.log(highlightWord);
  lyricLeft = lyricLeft.slice(
    lyricLeft.indexOf(highlightWord) + highlightWord.length
  );

  lyricDisplay =
    lyric.slice(0, lyric.indexOf(highlightWord)) +
    "<span id ='hl'> " +
    highlightWord +
    " </span>" +
    lyricLeft;

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
}, 500);

setInterval(() => {
  document.body.innerHTML = "";
}, 499.99);
