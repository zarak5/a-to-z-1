//let txt;

// function preload() {
//   txt = loadStrings('license_test.txt');
// }

//
function loadFile() {
  loadStrings('license_test.txt', fileLoaded);
}

function fileLoaded(data) {
  
  let alltxt = join(data, ' ');
  //let words = split(alltxt, ' ');
  words = alltxt.split(' ');
  
  console.log(words);
  words = words.reverse();
  alltxt = join(words, ' ');
  createP(alltxt);
}

function setup() {
  noCanvas();
  loadFile();
  //console.log();
}
