console.log("its working")

// time to code the timer 
// program to display the date
// get local machine date time
setInterval(timeDate()  ,30000);
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

    if(currentHour < 9 ) {
        document.getElementById('9am').className = 'future';
    }
        else if ( currentHour === 9 ) {
            document.getElementById('9am').className = 'present'
        }
    else  {
        document.getElementById('9am').className = 'past'
    }
    // new section
    if(currentHour < 10 ) {
        document.getElementById('10am').className = 'future';
    }
        else if ( currentHour === 10) {
            document.getElementById('10am').className = 'present'
        }
    else  {
        document.getElementById('10am').className = 'past'
    }
    //new section
    if(currentHour < 11 ) {
        document.getElementById('11am').className = 'future';
    }
        else if ( currentHour === 11) {
            document.getElementById('11am').className = 'present'
        }
    else  {
        document.getElementById('11am').className = 'past'
    }
    //new section
    if(currentHour < 12 ) {
        document.getElementById('12pm').className = 'future';
    }
        else if ( currentHour === 12) {
            document.getElementById('12pm').className = 'present'
        }
    else  {
        document.getElementById('12pm').className = 'past'
    }
    //new section
    if(currentHour < 13 ) {
        document.getElementById('1pm').className = 'future';
    }
        else if ( currentHour === 13) {
            document.getElementById('1pm').className = 'present'
        }
    else  {
        document.getElementById('1pm').className = 'past'
    }
    // new section
    if(currentHour < 14 ) {
        document.getElementById('2pm').className = 'future';
    }
        else if ( currentHour === 14) {
            document.getElementById('9am').className = 'present'
        }
    else  {
        document.getElementById('2pm').className = 'past'
    }
    //new section
    if(currentHour < 15) {
        document.getElementById('3pm').className = 'future';
    }
        else if ( currentHour === 15) {
            document.getElementById('3pm').className = 'present'
        }
    else  {
        document.getElementById('3pm').className = 'past'
    }
    //new section
    if(currentHour < 15 ) {
        document.getElementById('4pm').className = 'future';
    }
        else if ( currentHour === 15) {
            document.getElementById('4pm').className = 'present'
        }
    else  {
        document.getElementById('4pm').className = 'past'
    }
    //new section
    if(currentHour < 16 ) {
        document.getElementById('5pm').className = 'future';
    }
        else if ( currentHour === 16) {
            document.getElementById('5pm').className = 'present'
        }
    else  {
        document.getElementById('5pm').className = 'past'
    }

}
setInterval(timeDate);

// local storage functions 

// block 1

document.getElementById("btn1").addEventListener("click", function ()
    {
        var user = document.getElementById("9am").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("9am", user) ;
    } , true);

// block 2

document.getElementById("btn2").addEventListener("click", function ()
    {
        var user = document.getElementById('10am').value ;
        //localStorage["user"] = user ;
        localStorage.setItem("10am", user) ;
    } , true);

// block 3

document.getElementById("btn3").addEventListener("click", function ()
    {
        var user = document.getElementById("11am").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("11am", user) ;
    } , true);
//block 4
//block 5
document.getElementById("btn4").addEventListener("click", function ()
{
    var user = document.getElementById("12pm").value ;
    //localStorage["user"] = user ;
    localStorage.setItem("12pm", user) ;
} , true);
//bock 6
document.getElementById("btn5").addEventListener("click", function ()
{
    var user = document.getElementById("1pm").value ;
    
    localStorage.setItem("1pm", user) ;
    
} , true);
//block 7
document.getElementById("btn6").addEventListener("click", function ()
{
    var user = document.getElementById("2pm").value ;
    
    localStorage.setItem("2pm", user) ;
} , true);
//block 8
document.getElementById("btn7").addEventListener("click", function ()
{
    var user = document.getElementById("3pm").value ;
    
    localStorage.setItem("3pm", user) ;
} , true);
//block 9 
document.getElementById("btn8").addEventListener("click", function ()
{
    var user = document.getElementById("4pm").value ;
    
    localStorage.setItem("4pm", user) ;
} , true);
document.getElementById("btn9").addEventListener("click", function ()
{
    var user = document.getElementById("5pm").value ;
    
    localStorage.setItem("11am", user) ;
} , true);


