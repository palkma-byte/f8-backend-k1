// let html = `<h1>Hoc lap trinh tai F8</h1>`
// document.write(html)

let content =
  "Adipisicing consequat velit labore consequat elit sunt voluptate irure labore deserunt nisi. Excepteur adipisicing duis velit id ullamco magna ea esse ex. Irure occaecat consectetur est non minim sint cupidatat et enim ad dolor. Exercitation occaecat cupidatat duis id voluptate deserunt aliquip laboris dolore est culpa veniam sint irure. Proident aute ad proident aute irure ullamco minim occaecat consequat incididunt quis ipsum proident Lorem.";

let keyword = "consequat";

let keyPosition = content
  .toLocaleLowerCase()
  .indexOf(keyword.toLocaleLowerCase());

let contentFound = "";
while (keyPosition !== -1) {
  let firstContent = content.slice(0, keyPosition);
  content = content.slice(keyPosition);
  contentFound =
    contentFound +
    firstContent +
    "<span>" +
    content.slice(0, keyword.length) +
    "</span>";
  content = content.slice(keyword.length);
  
  keyPosition = content
    .toLocaleLowerCase()
    .indexOf(keyword.toLocaleLowerCase());
}

content = contentFound + content;

console.log(content);

document.write(content);
