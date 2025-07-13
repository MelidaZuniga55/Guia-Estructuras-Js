function calcularPromedios(turnoM, turnoT, turnoN) {
  const promedio = arr => arr.reduce((sum, val) => sum + val, 0) / arr.length;

  const promM = promedio(turnoM);
  const promT = promedio(turnoT);
  const promN = promedio(turnoN);

  console.log("Ejercicio 10:");
  console.log(`Promedio Mañana: ${promM.toFixed(2)}`);
  console.log(`Promedio Tarde: ${promT.toFixed(2)}`);
  console.log(`Promedio Noche: ${promN.toFixed(2)}`);

  const mayor = Math.max(promM, promT, promN);
  const turnoMayor = (mayor === promM) ? "Mañana" :
                     (mayor === promT) ? "Tarde" : "Noche";

  console.log(`Turno con promedio mayor: ${turnoMayor}`);
}

const turnoM = [15, 16, 17, 18, 19]; // 5 estudiantes
const turnoT = [20, 21, 20, 19, 22, 23]; // 6 estudiantes
const turnoN = [17, 18, 18, 19, 20, 20, 21, 19, 20, 21, 22]; // 11 estudiantes

calcularPromedios(turnoM, turnoT, turnoN);
