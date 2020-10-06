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


function johnLennonFacts(facts) {
  var facts2 = []

  let i = 0
  while(i < facts.length) {
    facts2.push(`${facts[i]}!!!`)
    i++
  } return facts2
}


function iLoveTheBeatles(num) {
  var arr = [];

  do {
    arr.push("I love the Beatles!");
    num ++
  } while (num < 15);
  return arr
}
