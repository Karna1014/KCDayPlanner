var currentDayEl = document.getElementById("currentDay");
var myInput1El = document.getElementById("myInput1");
var myInput2El = document.getElementById("myInput2");
var myInput3El = document.getElementById("myInput3");
var myInput4El = document.getElementById("myInput4");
var myInput5El = document.getElementById("myInput5");
var myInput6El = document.getElementById("myInput6");
var myInput7El = document.getElementById("myInput7");
var myInput8El = document.getElementById("myInput8");
var save1El = document.getElementById("save1");
var save2El = document.getElementById("save2");
var save3El = document.getElementById("save3");
var save4El = document.getElementById("save4");
var save5El = document.getElementById("save5");
var save6El = document.getElementById("save6");
var save7El = document.getElementById("save7");
var save8El = document.getElementById("save8");

currentDayEl = moment().format('dddd, MMMM Do YYYY');
console.log(currentDayEl);

save1El.addEventListener('click', function() {
    // upon clicking save button, all info in input line must
        //save to local storage along with time stamp
        //commit to input line allowing info to persist if page is refreshed
        });
currentTime = moment().format('LLL');
//if(currentTime <= badge time highlight input as current event)
    //else if ( highlight all others as future events) 
    //else(highlight input as past event) 
