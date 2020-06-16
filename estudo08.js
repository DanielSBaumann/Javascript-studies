let n1 = 12 % 5;
console.log(n1);
++n1;
console.log(n1);
n1++;
console.log(n1);

console.log(+true);

console.log(+false);

console.log(-true);

let partes = ['ombro', 'joelhos'];
let musica = ['cabeça', ...partes, 'e', 'pés'];

console.log(musica);

let args = [1, 2, 3];

function fn(x, y, z) {
    return x + y + z;
}

fn(...args);

console.log(0 in args);

console.log("5" in args[1]);

let list = [1, 2, 3, 4, 5, 6, 7, 8];

list.forEach(item => {
    if (item % 2 === 0) {
        console.log(item);
    }
});