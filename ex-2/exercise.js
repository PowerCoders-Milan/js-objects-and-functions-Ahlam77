// write your JS here
// remember to always test in the browser
// to see if everything works correctly


function tellFortune(jobTitle, geoLocation, partner, numKids) {
    
   var jobTitle = prompt("write your job that you want to have");
    var geoLocation = prompt("write where you want to live");
    var partner = prompt("write a name of a person ");
    var numKids = prompt("write a number"); 
    window.alert( 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
    partner + ' ' + ' with ' + numKids + ' kids.');
}


tellFortune();
tellFortune();
tellFortune();