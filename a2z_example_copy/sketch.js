let txt;

function preload() {
  txt = loadStrings('license_test.txt');
}

function setup() {
  noCanvas();
  //console.log();
  
  let alltxt = join(txt, ' ');
  //let words = split(alltxt, ' ');
  words = alltxt.split(' ');
  
  console.log(words);
  words = words.reverse();
  alltxt = join(words, ' ');
  createP(alltxt);
}