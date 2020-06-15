var n = prompt("Digite um número");

var lista = primo(n);

console.log(lista);

for (var i = 0; i < lista.length; i++) {

    document.write("<p>Elemento nº " + (i + 1) + " da lista de Primos : " + lista[i] + "</p>");

}

for (var num of lista) {
    alert(num);
}

function primo(n) {

    var vetor = [];

    for (var i = 2; i < n; i++) {
        var count = 1;
        for (var j = 2; j <= i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (count == 2) {
            vetor.push(i);
            console.log(vetor[i]);
        }
    }
    return vetor;
}