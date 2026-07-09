// ==========================================
// EcoFreno Simulator
// Centro de Masa
// ==========================================

export interface ResultadoCentroMasa {

  masaTotal: number;

  porcentajeDelantero: number;

  porcentajeTrasero: number;

}

export function calcularCentroDeMasa(

  masaVehiculo: number,

  pesoExtra: number,

  posicion: string

): ResultadoCentroMasa {

  const masaTotal = masaVehiculo + pesoExtra;

  let porcentajeDelantero = 50;

  let porcentajeTrasero = 50;

  switch (posicion) {

    case "Maletero":
      porcentajeDelantero = 45;
      porcentajeTrasero = 55;
      break;

    case "Asientos Traseros":
      porcentajeDelantero = 47;
      porcentajeTrasero = 53;
      break;

    case "Asiento Copiloto":
      porcentajeDelantero = 52;
      porcentajeTrasero = 48;
      break;

    case "Techo":
      porcentajeDelantero = 50;
      porcentajeTrasero = 50;
      break;

    case "Remolque":
      porcentajeDelantero = 40;
      porcentajeTrasero = 60;
      break;

  }

  return {

    masaTotal,

    porcentajeDelantero,

    porcentajeTrasero

  };

}