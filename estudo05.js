var list = [];
var aux = 1;

while (aux <= 10) {
    var info = prompt("Digite uma informção");
    list.push(info);
    aux++;
}

aux = 0;

while (aux < list.length) {
    console.log(list[aux]);
    aux++;
}

alert("Fim da execução");


var n = prompt("Digite um número inteiro positivo");

if (n >= 0) {
    alert("This is the way!");
} else {
    alert("Erro!");
}

var vetor = ['casa', 'caixa', 'caneta', 'caneca', 'casa', 'carro'];
var indice = 0;

for (var i = 0; i < vetor.length; i++) {
    alert(vetor[i]);
}