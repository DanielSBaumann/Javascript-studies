alert("Escolha uma opção de : \n1-Oi\n2-Tchau\n3-Até logo\n4-Fim");

var op = prompt("Digite a opção ", "Digite aqui!");

switch (op) {
    case "1": alert("Oi!");
        break;
    case "2": alert("Tchau!");
        break;
    case "3": alert("Até!");
        break;
    case "4": alert("Fim!");
        break;
    default: alert("Opção invalida!");
}

var v1 = [];

var v2 = ["joão", "maria", "jose"];

var v3 = [11, 2, 44, 78, 66];

console.log(v1.length);
console.log(v2.length);
console.log(v3.length);
document.write("<p> O tamanho do vetor v1 é: " + v1.length + "<\p>");
document.write("<p> O tamanho do vetor v2 é: " + v2.length + "<\p>");
document.write("<p> O tamanho do vetor v3 é: " + v3.length + "<\p>");

v1[0] = "abc";
document.write("<p> O tamanho do vetor v1 é: " + v1.length + "<\p>");

v1[1] = 25, 78;
document.write("<p> O tamanho do vetor v1 é: " + v1.length + "<\p>");

for (var i = 0; i < v2.length; i++) {
    console.log(v2[i]);
    if (v2[i] === "maria") {
        //v2.pop();
    }
}

for (var i = 0; i < v2.length; i++) {
    console.log(v2[i]);
}