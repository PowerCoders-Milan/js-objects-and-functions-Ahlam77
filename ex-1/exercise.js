// write your JS here
// remember to always test in the browser
// to see if everything works correctly



function sentnce(noun, verb, adverb, adjective) {
    return noun + " is a wanderful book to " + verb + " when you are  " + adverb + " with this book you going to be very " + adjective
}

var noun = prompt(" give a name of favorite book  ")
var verb = prompt("what do you do with the book, wirte a verb")
var adverb = prompt("would you writ an adverb")
var adjective = prompt("would you write an adjective referred to the book")

window.alert(sentnce(noun, verb,adverb,adjective))