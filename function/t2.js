function math(number){
    if(number % 2 != 0){
        var result = number * 2;
        console.log(`Result is ${result} by multiplication`);
    }
    else {
        var result = number / 2;
        console.log(`Result is ${result} by divided`);
    }
    return result;
}

math(8);