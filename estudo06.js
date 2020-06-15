var altura = 10;
var base = 20;

for (var i = 1; i <= altura; i++) {
    document.write("<br>");
    for (var j = 1; j <= base; j++) {
        document.write("*");
    }
}

var n = 10;

for (var i = 0; i <= n; i++) {
    document.write("<br>");
    for (var j = 0; j < i; j++) {
        document.write("<p>*</p>");
    }
}