function calcularAumento(nombre, salario, categoria) {
  let porcentaje;
  switch (categoria.toUpperCase()) {
    case 'A': porcentaje = 0.15; break;
    case 'B': porcentaje = 0.30; break;
    case 'C': porcentaje = 0.10; break;
    case 'D': porcentaje = 0.20; break;
    default:
      console.log("Ejercicio 3: Categoría no válida");
      return;
  }

  const aumento = salario * porcentaje;
  const nuevoSalario = salario + aumento;

  console.log("Ejercicio 3:");
  console.log(`Empleado: ${nombre}`);
  console.log(`Categoría: ${categoria}`);
  console.log(`Aumento: $${aumento.toFixed(2)}`);
  console.log(`Nuevo salario: $${nuevoSalario.toFixed(2)}`);
}
calcularAumento("Mario", 700, 'B');
