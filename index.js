function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
  var string = `${musicians[i]} plays ${instruments[i]}`;
  empty.push(string);
}
return empty;
}
function johnLennonFacts(facts){
var newfacts = [];
let index = 0;
  while (facts.length>index){
    newfacts.push(facts[index]+"!!!");
  index++;
}
return newfacts;
}
function iLoveTheBeatles(number) {
  var love = [];
  var i = 0;
  do { love.push("I love the Beatles!");
  Number++;}
  while (Number < 15);
  return love;
}
