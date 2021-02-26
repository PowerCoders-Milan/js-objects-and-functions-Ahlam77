function sayHallo (language) {
    var language = prompt(" please writ Your language btween en al am ")


    if(language === "en"){
        window.alert("Hello world")
    }else if(language === "al"){
        window.alert("Përshendetje Botë")
    } else if(language === "am"){
        window.alert("Բարեւ աշխարհ")
    }
    else {
    
    window.alert("Hello,world");
}
}
    sayHallo();