const sentence = 'I am a good boy. I attend every class.'
var rev = '';
for (var i = sentence.length-1; i>=0 ; i--){
    var letter = sentence[i];
    rev = rev + letter;
}

console.log(rev)



// const sentence = 'I am a good boy. I attend every class.';
// var rev = '';  // Initialize rev once

// for (let i = sentence.length - 1; i >= 0; i--) {  // Proper index range
//   let letter = sentence[i];  // Get the letter from the sentence
//   rev = rev + letter;  // Concatenate letter to rev
// }

// console.log(rev);  // Output the reversed string