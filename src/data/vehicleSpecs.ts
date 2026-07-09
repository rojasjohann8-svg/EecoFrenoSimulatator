export interface VehicleSpecs {
  marca: string;
  modelo: string;
  masa: number;
  bateria: number; // kWh
  potenciaMotor: number; // kW
  autonomia: number; // km
  traccion: "FWD" | "RWD" | "AWD";

  distanciaEntreEjes: number;
  alturaCentroGravedad: number;

  distribucionDelantera: number;
  distribucionTrasera: number;

  regeneracionMaxima: number;
}

export const vehiculos: VehicleSpecs[] = [

{
    marca:"Tesla",
    modelo:"Model 3 Long Range",
    masa:1847,
    bateria:75,
    potenciaMotor:366,
    autonomia:629,
    traccion:"AWD",

    distanciaEntreEjes:2.875,
    alturaCentroGravedad:0.48,

    distribucionDelantera:48,
    distribucionTrasera:52,

    regeneracionMaxima:75
},

{
    marca:"Tesla",
    modelo:"Model Y",
    masa:1995,
    bateria:75,
    potenciaMotor:378,
    autonomia:533,
    traccion:"AWD",

    distanciaEntreEjes:2.89,
    alturaCentroGravedad:0.53,

    distribucionDelantera:48,
    distribucionTrasera:52,

    regeneracionMaxima:75
},

{
    marca:"BYD",
    modelo:"Dolphin",
    masa:1658,
    bateria:60,
    potenciaMotor:150,
    autonomia:427,
    traccion:"FWD",

    distanciaEntreEjes:2.70,
    alturaCentroGravedad:0.52,

    distribucionDelantera:55,
    distribucionTrasera:45,

    regeneracionMaxima:60
},

{
    marca:"Hyundai",
    modelo:"Kona Electric",
    masa:1743,
    bateria:64,
    potenciaMotor:150,
    autonomia:484,
    traccion:"FWD",

    distanciaEntreEjes:2.60,
    alturaCentroGravedad:0.55,

    distribucionDelantera:56,
    distribucionTrasera:44,

    regeneracionMaxima:65
},

{
    marca:"Kia",
    modelo:"EV6",
    masa:1985,
    bateria:77.4,
    potenciaMotor:239,
    autonomia:528,
    traccion:"RWD",

    distanciaEntreEjes:2.90,
    alturaCentroGravedad:0.50,

    distribucionDelantera:50,
    distribucionTrasera:50,

    regeneracionMaxima:77
},

{
    marca:"Nissan",
    modelo:"Leaf e+",
    masa:1731,
    bateria:62,
    potenciaMotor:160,
    autonomia:385,
    traccion:"FWD",

    distanciaEntreEjes:2.70,
    alturaCentroGravedad:0.56,

    distribucionDelantera:57,
    distribucionTrasera:43,

    regeneracionMaxima:55
}

];