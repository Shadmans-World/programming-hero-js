var mark = prompt("Enter Your Mark ");

if (mark >=90 && mark <=100){
    console.log('Your Grade is A');
    window.alert('Your Grade is A');
}
else if (mark >=80 && mark <=89){
    console.log('Your Grade is B');
    window.alert('Your Grade is B');
}

else if (mark >=70 && mark <=79){
    console.log('Your Grade is C');
    window.alert('Your Grade is C');
}
else if (mark >=60 && mark <=69){
    console.log('Your Grade is D');
    window.alert('Your Grade is D');
}
else if (mark >=0 && mark <=59){
    console.log('Your Grade is F');
    window.alert('Your Grade is F');
}
else {
    console.log("You didn't attend the exam");
    window.alert("You didn't attend the exam");
}