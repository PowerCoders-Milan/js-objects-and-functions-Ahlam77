// write your JS here
// remember to always test in the browser
// to see if everything works correctly


var dob = prompt("Please anter you birthday")

function ageCalculator() {
    var realDate = new Date();
    return (realDate.getFullYear()-dob)
}


window.alert(ageCalculator())

