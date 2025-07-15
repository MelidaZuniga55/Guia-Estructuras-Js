function analizarValores(valores) {
  let negativos = 0, positivos = 0, multiplos15 = 0, sumaPares = 0;

  for (let num of valores) {
    if (num < 0) negativos++;
    if (num > 0) positivos++;
    if (num % 15 === 0) multiplos15++;
    if (num % 2 === 0) sumaPares += num;
  }

  console.log("Ejercicio 7:");
  console.log("Negativos:", negativos);
  console.log("Positivos:", positivos);
  console.log("Múltiplos de 15:", multiplos15);
  console.log("Suma de pares:", sumaPares);
}
analizarValores([15, -2, 0, 30, 8, -9, 14, 4, 90, 7]);
