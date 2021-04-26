var output = [];
var enter;
for (i = 0; i < 5; i++) {
    var enter = prompt("enter your 5 best friend names");
    output.push(enter);
}

function test(output) {
    var items = output.length;
    var random = (Math.floor(Math.random() * items));
    var respond = output[random];
    return (respond + " is your best friend");
}
test(output);
document.getElementById("friend").innerHTML = test(output);