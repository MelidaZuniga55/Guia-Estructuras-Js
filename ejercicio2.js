function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
  const notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);
  console.log("Ejercicio 2:");
  console.log(`Nombre: ${nombre}`);
  console.log(`Carnet: ${carnet}`);
  console.log(`Nota final: ${notaFinal.toFixed(2)}`);
}
calcularNotaFinal("Mélida Zuniga", "mz12345", 8.5, 9, 9.5, 8);
