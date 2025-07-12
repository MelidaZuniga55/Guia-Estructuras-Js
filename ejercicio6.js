function descuentoViaje(origen, destino) {
  let descuento = 0;

  if (origen.toLowerCase() === "palma") {
    switch (destino.toLowerCase()) {
      case "la costa del sol": descuento = 0.05; break;
      case "panchimalco": descuento = 0.10; break;
      case "puerto el triunfo": descuento = 0.15; break;
      default:
        console.log("Ejercicio 6: Destino no válido."); return;
    }

    console.log(`Ejercicio 6: Descuento aplicado: ${descuento * 100}%`);
  } else {
    console.log("Ejercicio 6: Origen no válido para aplicar descuento.");
  }
}
descuentoViaje("Tunco", "la costa del sol");
