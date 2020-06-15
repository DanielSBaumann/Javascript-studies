var a = "10";
var b = parseInt(a) + 3;
console.log(a + "\n" + b);

var c = "157.89";
var d = Number(c) - 52;
console.log(c + "\n" + d);

var e = 987;
var bin2 = e.toString(2);
var binDec = e.toString(8);
var binHex = e.toString(16);
console.log(e + "\n" + bin2 + "\n" + binDec + "\n" + binHex);

var f = bin2;
var g = f.toString(16);
console.log(f + "\n" + g);


var n = 0;

while (n <= 100) {
    console.log(n);
    n += 2;
}

var list = ["all", "the", "mammas", "and", "papas"];
var letra = list.join("@");
console.log(list);
console.log(letra);