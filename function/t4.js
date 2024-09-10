

function count_zero(binaryString){
    var str= binaryString.length;
    var sum = 0;
    for (var i=0; i<str; i++){
        if(binaryString[i] ==='1'){
            sum = sum + 1;
        }
    }
    return sum;
    
}

var binary = '0001110101110001';
console.log(count_zero(binary));


// const str= '00011010100';
// var sum = 0;
// for (var i=0; i<str.length; i++){
//     if(str[i] ==='0'){
//         sum = sum + 1;
//     }
// }
// console.log(sum);

