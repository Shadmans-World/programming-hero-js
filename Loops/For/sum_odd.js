var sum = 0;
for (var i = 91; i <=129; i++){
    if(i %2 != 0){
        var sum = sum + i;
    }
    
}
console.log(`The sum of all odd numbers from 91 to 129 is: ${sum}`);