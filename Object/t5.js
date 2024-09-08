let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };

    var keys = Object.keys(myObject);
   


   for(key of keys){
    console.log(key,":", myObject[key], "|", "type :", typeof(myObject[key]))
   }