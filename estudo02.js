document.write("BEM VINDO ALUNOS");
        var valor = prompt("Escreva algo");
        document.write("<br>");
        document.write("<h1 style='background-color : red; color : blue;'>" + valor + "</h1>");

        document.write("Maior de 3 números digitados");
        var n1 = prompt("1º número ");
        var n2 = prompt("2º número ");
        var n3 = prompt("3º número ");

        var maior = n1;

        if (n2 > n1) {
            maior = n2;
        }
        if (n3 > maior) {
            maior = n3;
        }
        alert("o Maior número é " + maior)