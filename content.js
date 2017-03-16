const linksArr = []; 
const linkObjs = document.links;

for(let i=0; i<linkObjs.length; i++) {
  linksArr.push(linkObjs[i].href);
}

let urls = document.querySelectorAll('a');

for (let i = 0; i < urls.length; i++) {
  let idx = Math.floor(Math.random() * linksArr.length);
  urls[i].setAttribute('href', linksArr[idx])
};