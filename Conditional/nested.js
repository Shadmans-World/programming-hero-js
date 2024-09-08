var myScore = prompt('Your Score: ');

if (myScore > 80){
    var friendScore = prompt('Friends Score: ');
    if(friendScore > 80){
        window.alert('Go For a Lunch')
    }
    else if(friendScore >=60 && friendScore <80){
        window.alert('Good luck next time')
    }
    else if(friendScore >=40 && friendScore < 60){
        alert("keeping my friend's message unseen.")
    }
    else if(friendScore<40){
        alert('blocking my friend')
    }
}
else if(myScore < 80){
    alert('going to home and sleep and act sad')
}