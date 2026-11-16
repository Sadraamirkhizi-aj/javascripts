// if (condition) {
    // code A
// } else if (condition2) {
   // code B
// } else {
    // code C
// }

const age = 20;
if (age <20){
    console.log("kid");
}else if(age=== 20){
    console.log("suffer");
}else{
    console.log("old");
}

// we dont write condition for else

const code = "python";

switch (code){
    case "java":
        console.log("for frontend");
        break
    case "django":
        console.log("backend");
        break
    default:
        console.log("go out");

}
// in switch we should write exact value in case not writing condition for condition we write if

const score = 85;

switch (score) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 70:
    console.log("B");
    break;
  default:
    console.log("C");
}


const score_1 = 85;

if (score_1 >= 90){
    console.log("A");
}else if(score_1 >= 70){
    console.log("b")
}else{
    console.log("c")
}