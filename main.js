/* function verificarParidade(num) {
  if (num % 2 === 0) {
    console.log("É par");
  } else {
    console.log("É impar");
  }
}

verificarParidade(32); */

/* function calcularFatorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * calcularFatorial(num - 1);
}
console.log(calcularFatorial(5));
 */

/* function regressiva() {
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
}
regressiva();
 */

/* let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce((acumulador, num) => {
  return (acumulador += num);
}, 0);

console.log(soma);
 */

/* let numeros = [1, 2, 3, 15, 5, 6, 7, 8];
let primeiroNum = numeros[0];

numeros.forEach((num) => {
  if (num > primeiroNum) {
    primeiroNum = num;
  }
});

console.log(primeiroNum);
 */

let numeros = [1, 2, 5, 3, 6, 7, 9, 4, 5];
/* const dobrados = numeros.map((num) => num * 2);
console.log(dobrados); */
let numInvertidos = [];
numeros.forEach((num) => {
  numInvertidos.unshift(num);
});
console.log(numInvertidos);
