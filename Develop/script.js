console.log("its working")

// time to code the timer 
// program to display the date
// get local machine date time
        var nine = document.getElementById('9am');
        var ten = document.getElementById("10am");
        var eleven = document.getElementById("11am");
        var twelve = document.getElementById("12pm");
        var one = document.getElementById("1pm");
        var two = document.getElementById("2pm");
        var three = document.getElementById("3pm");
        var four = document.getElementById("4pm");
        var five = document.getElementById("5pm");
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
    if(currentHour < 16 ) {
        document.getElementById('4pm').className = 'future';
    }
        else if ( currentHour === 16) {
            document.getElementById('4pm').className = 'present'
        }
    else  {
        document.getElementById('4pm').className = 'past'
    }
    //new section
    if(currentHour < 17 ) {
        document.getElementById('5pm').className = 'future';
    }
        else if ( currentHour === 17) {
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
        var dataObject = document.getElementById("9am").value;
        console.log(dataObject.value);
        localStorage.setItem("9am", JSON.stringify(dataObject));

    } , true);

// block 2

document.getElementById("btn2").addEventListener("click", function ()
    {
        var user = document.getElementById('10am').value ;
        
        localStorage.setItem("10am", JSON.stringify(user));
    } , true);

// block 3

document.getElementById("btn3").addEventListener("click", function ()
    {
        var user = document.getElementById("11am").value ;
        
        localStorage.setItem("11am", JSON.stringify(user));
    } , true);
//block 4

document.getElementById("btn4").addEventListener("click", function ()
{
    var user = document.getElementById("12pm").value ;

    localStorage.setItem("12pm", JSON.stringify(user));
} , true);
//bock 5
document.getElementById("btn5").addEventListener("click", function ()
{
    var user = document.getElementById("1pm").value ;
    
    localStorage.setItem("1pm", JSON.stringify(user));
    
} , true);
//block 6
document.getElementById("btn6").addEventListener("click", function ()
{
    var user = document.getElementById("2pm").value ;
    
    localStorage.setItem("2pm", JSON.stringify(user));
} , true);
//block 7
document.getElementById("btn7").addEventListener("click", function ()
{
    var user = document.getElementById("3pm").value ;
    
    localStorage.setItem("3pm", JSON.stringify(user));
} , true);
//block 8
document.getElementById("btn8").addEventListener("click", function ()
{
    var user = document.getElementById("4pm").value ;
    
    localStorage.setItem("4pm", JSON.stringify(user));
} , true);

//block 9
document.getElementById("btn9").addEventListener("click", function ()
{
    var user = document.getElementById("5pm").value ;

    localStorage.setItem("5pm", JSON.stringify(user));
} , true);

setNine()
function setNine(){
    var object9 = JSON.parse(localStorage.getItem('9am'));
    console.log(object9);
    nine.innerText = object9;
    //big brain 2
    var object10 = JSON.parse(localStorage.getItem('10am'));
    console.log(object10);
    ten.innerText = object10;
    //big brain 3
    var object11 = JSON.parse(localStorage.getItem('11am'));
    console.log(object11);
    eleven.innerText = object11;
    //big brain 4
    var object12 = JSON.parse(localStorage.getItem('12pm'));
    console.log(object12);
    twelve.innerText = object12;
    //big brain 5
    var object13 = JSON.parse(localStorage.getItem('1pm'));
    console.log(object13);
    one.innerText = object13;
    //big brain 6
    var object14 = JSON.parse(localStorage.getItem('2pm'));
    console.log(object14);
    two.innerText = object14;
    //big brain7
    var object15 = JSON.parse(localStorage.getItem('3pm'));
    console.log(object15);
    three.innerText = object15;
    //big brain8
    var object16 = JSON.parse(localStorage.getItem('4pm'));
    console.log(object16);
    four.innerText = object16;
    //big brain9
    var object17 = JSON.parse(localStorage.getItem('5pm'));
    console.log(object17);
    five.innerText = object17;


}