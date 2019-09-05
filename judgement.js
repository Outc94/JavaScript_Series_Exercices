function get_achievement(english,arithmetics,science){
  let sum = english + arithmetics + science;
  if(sum >= 250 && sum <= 300) {
        return "A";
  }else if (sum >= 200 && sum <= 249) {
        return "B";
  }else if (sum >= 100 && sum <= 199){
        return "C";
  }else{
        return "D";
  }
}
//console.log(get_achievement(30,30,10));

function get_pass_or_failure(english,arithmetics,science){
  if(english >= 60 && arithmetics >= 60 && science >= 60) {
        return "passed";
  }else{
        return "failed";
  }
}
//console.log(get_pass_or_failure(60,60,60));

function judgement(english,arithmetics,science){
  let achievement = get_achievement(english,arithmetics,science);
  let pass_or_failure = get_pass_or_failure(english,arithmetics,science);
  return `Your result is ${achievement}. You ${pass_or_failure}!`;
}
console.log(judgement(60,100,60));
