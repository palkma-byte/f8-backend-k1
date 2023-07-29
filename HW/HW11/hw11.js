let link = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
let api = `https://api.shrtco.de/v2/shorten?url=`;

let linkShorten = async function (url) {
  try {
    let res = await fetch(`${api}${url}`);
    let data = await res.json();        
      console.log(data.result.short_link);       
   } catch (e) {
     console.log(e);
  }
};

linkShorten(link);
