
function factorial(numero) {
  if (numero < 0 || !Number.isInteger(numero)) {
    return undefined;
  }

  let resultado = 1;

  for (let i = 1; i <= numero; i++) {
    resultado = resultado * i;
  }

  return resultado;
}

console.log(factorial(5));
