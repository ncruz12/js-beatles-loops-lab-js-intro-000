// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians, instruments) {
  var array1 = [];

  for (let i = 0; i < musicians.length; i++) {
    for (let j = 0; j < instruments.length; j++) {
      if (i === j) {
        array1.push(`${musicians[i]} plays ${instruments[j]}`);
      }
    }
  } return array1;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
let i = 0
function johnLennonFacts() {
  var facts2 =[]
  while(i < facts.length) {
    facts2.push(`${facts[i]}!!!`)
    i = i + 1
  } return facts2;
}

function iLoveTheBeatles(num) {
  var array = [];
  var i = 0

  do {
    array.push("I love the Beatles!");
    i = i + 1
    return array;
  } while (num < 15);
}
