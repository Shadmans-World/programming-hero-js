
function make_avg(array){

var arr_length = array.length;
var sum = 0;
var avg = 0;

for(i = 0; i<arr_length; i++){
    var sum = sum + array[i];
    var avg = sum / 2;
    
} 
return avg;
}

var numbers =[1,2,3,4,5,6,7,8,9,10,11,12,12,13,14,15];
console.log("The avg is :",make_avg(numbers));


