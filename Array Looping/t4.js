const statement = 'I am a hard working person'

var newStatement = statement.split(' ');
console.log(newStatement);

var rev = [];
var res;
for(i = newStatement.length-1; i>=0; i--){
      res = newStatement[i];
      rev.push(res);
}
console.log(rev)