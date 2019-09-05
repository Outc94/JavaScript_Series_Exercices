let points = [60, 100, 80, 80, 70, 80];
function get_achievement(points){
  let number = points.length;
  let sum = 0;
   for (let i=0; i<number; i++){
      sum = sum + points[i];
}
  if(sum >= number * 100 * 0.8) {
        return "A";
  }else if (sum >= number * 100 * 0.6 && sum < number * 100 * 0.8) {
        return "B";
  }else if (sum >= number * 100 * 0.4 && sum < number * 100 * 0.6){
        return "C";
  }else{
        return "D";
  }
}
//console.log(get_achievement(points));

function get_pass_or_failure(points){
  let number = points.length;
  let judge = "Passed";
   for(let i=0; i<number; i++){
    if (points[i] < 60){
      judge = "Failed";
  }
    break;
}
  return judge;
}
//console.log(get_pass_or_failure(points));

function judgement(points){
   let achievement = get_achievement(points);
   let pass_or_failure = get_pass_or_failure(points);
   return `Your result is ${achievement}. You ${pass_or_failure}!`;
}
console.log(judgement(points));
