console.log("its working")

// time to code the timer 
// program to display the date
// get local machine date time
setInterval(timeDate()  ,1000);
    function timeDate(){
    const currentDate = new Date();

// get the date as a string
    const n = currentDate.toDateString();

// get the time as a string
    const time = currentDate.toLocaleTimeString();
    document.getElementById('timer').innerText = 'Time: ' + time;
    document.getElementById('date').innerText = 'Date: ' + n;


// // display date
//     console.log('Date: ' + n);

// // display time
//     console.log('Time: ' + time);


        var currentHour = currentDate.getHours();
        console.log(currentHour);
        var nine = document.getElementById('9am');
        var ten = document.getElementById("10am");
        var eleven = document.getElementById("11am");
        var twelve = document.getElementById("12pm");
        var one = document.getElementById("1pm");
        var two = document.getElementById("2pm");
        var three = document.getElementById("3pm");
        var four = document.getElementById("4pm");
        var five = document.getElementById("5pm");

    if(currentHour < nine ) {
        document.getElementById('9am').className = 'future';
    }
        else if ( currentHour === nine) {
            document.getElementById('9am').className = 'present'
        }
    else  {
        document.getElementById('9am').className = 'past'
    }
    // new section
    if(currentHour < ten ) {
        document.getElementById('10am').className = 'future';
    }
        else if ( currentHour === ten) {
            document.getElementById('10am').className = 'present'
        }
    else  {
        document.getElementById('10am').className = 'past'
    }
    //new section
    if(currentHour < eleven ) {
        document.getElementById('11am').className = 'future';
    }
        else if ( currentHour === eleven) {
            document.getElementById('11am').className = 'present'
        }
    else  {
        document.getElementById('11am').className = 'past'
    }
    //new section
    if(currentHour < twelve ) {
        document.getElementById('12pm').className = 'future';
    }
        else if ( currentHour === twelve) {
            document.getElementById('12pm').className = 'present'
        }
    else  {
        document.getElementById('12pm').className = 'past'
    }
    //new section
    if(currentHour < one ) {
        document.getElementById('1pm').className = 'future';
    }
        else if ( currentHour === one) {
            document.getElementById('1pm').className = 'present'
        }
    else  {
        document.getElementById('1pm').className = 'past'
    }
    // new section
    if(currentHour < two ) {
        document.getElementById('2pm').className = 'future';
    }
        else if ( currentHour === two) {
            document.getElementById('9am').className = 'present'
        }
    else  {
        document.getElementById('2pm').className = 'past'
    }
    //new section
    if(currentHour < three) {
        document.getElementById('3pm').className = 'future';
    }
        else if ( currentHour === three) {
            document.getElementById('3pm').className = 'present'
        }
    else  {
        document.getElementById('3pm').className = 'past'
    }
    //new section
    if(currentHour < four ) {
        document.getElementById('4pm').className = 'future';
    }
        else if ( currentHour === four) {
            document.getElementById('4pm').className = 'present'
        }
    else  {
        document.getElementById('4pm').className = 'past'
    }
    //new section
    if(currentHour < five ) {
        document.getElementById('5pm').className = 'future';
    }
        else if ( currentHour === five) {
            document.getElementById('5pm').className = 'present'
        }
    else  {
        document.getElementById('5pm').className = 'past'
    }

}
setInterval(timeDate);


//nortons idea 


// for (i= 0; i> 8 i++ )

// if time < asdf set nine = var class = element 
// else if == set time = color 
// else set = color   
// )
