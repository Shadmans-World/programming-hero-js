var weight = 80;
var height = 1.8;

var BMI = weight / (height)**2;
console.log("BMI is:" ,BMI);

if(BMI < 18.5){
    console.log("You are underweight")
}
else if( BMI >= 18.5 && BMI <= 24.9){
    console.log("You are Normal")
}
else if( BMI >= 25 && BMI <= 29.9){
    console.log("You are overweight")
}
else{
    console.log("You are obese")
}
