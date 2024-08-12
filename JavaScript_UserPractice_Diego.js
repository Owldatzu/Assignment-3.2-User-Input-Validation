// These are all the inputs the user needs to fullfill
function checkCreds()
{
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var badgeNum = document.getElementById("badgeID").value;
    // concatenate
    var fullName = firstName+ " " + lastName;

    if (fullName.length > 20 || fullName.length< 3)
    {
        document.getElementById("loginStatus").innerHTML = "full name too long or too short";
    }

    else if (badgeNum>99999  || badgeNum<10000)
    {
        document.getElementById("loginStatus").innerHTML = "Zip code num needs to be 5 characters"
    }

   // else if (badgeNum.length  !=3)
 //   {
 //       document.getElementById("loginStatus").innerHTML = "Badge is incorect";
//    }

//This is where the system recognizes the user's input and let's them continue
    else 
    {
        alert("Access Granted!")
        alert('Welcome ' + firstName)
        location.replace("Assignment_2.1_FightGame_Diego.html");
    }
        
}