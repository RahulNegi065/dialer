// var count = 0;

// $(".keys").on('click', function() {
//   var num = ($(this).clone().children().remove().end().text());
//   if (count < 11) {
//     $(".input").append('<span>' + num.trim() + '</span>');

//     count++
//   }
// });

// $(".backspace").on('click', function() {
//   $(".input span:last-child").remove();
//   count--;
// });

function getOutput() {
    return document.getElementById("input").innerText;
}

function printOutput(num) {
    if(num=="") {
        document.getElementById("input").innerText=num;
    }
    else{
    document.getElementById("input").innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    // var n = Number (num);
    var value = num;
    return value;
}

printOutput("")

var nan = document.getElementsByClassName("nan");
for(var i=0;i<nan.length;i++) {
    nan[i].addEventListener('click', function(){
        let output=getFormattedNumber(getOutput()).toString();
        // let str=this.id.toString();
        if(this.id=="*" || this.id=="#") {
            output = output+this.id;
            printOutput(output);
        }
    })
}

var backspace = document.getElementsByClassName("backspace");
for(var i=0;i<backspace.length;i++) {
    backspace[i].addEventListener('click', function(){
        var output=getFormattedNumber(getOutput()).toString();
        if(this.id=="clear"){
            output = output.substr(0,output.length-1);
            printOutput(output);
        }
    });
}

var keys = document.getElementsByClassName("keys");
for(var i=0;i<keys.length;i++) {
    keys[i].addEventListener('click', function(){
        var output = getFormattedNumber(getOutput()).toString();
        if(this.id!=NaN) {
            output=output+this.id;
            printOutput(output);
        }
    });
}