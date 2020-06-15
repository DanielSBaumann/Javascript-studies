var n1 = 1, n2 = 2, n3 = 3, n4 = 4;
        console.log(n1 + n2 + n3 + n4);
        var nome = prompt("Digite seu nome : ", "Favor digitar somente letras!");
        console.log(nome);
        console.log(5 === "5");

        var letra = prompt("Digite uma letra");

        if (letra == "a") {
            alert("Obrigado, você digitou corretamente.");
        } else {
            alert("Erro!")
        }
        alert("fim do script");

        var n = prompt("Digite um número : ");

        if (n % 2 == 0) {
            alert("Par");
        } else {
            alert("Impar");
        }

        var op = confirm("deseja continuar?");

        if (op) {
            alert("muito bem !");
        } else {
            alert("Fim");
        }