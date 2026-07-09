export interface Vehiculo {
  id: number;
  marca: string;
  modelo: string;
  bateria: number;
  masa: number;
  potencia: number;
  traccion: string;
  posicionMotor: string;
}

export const vehiculos: Vehiculo[] = [

  {
    id: 1,
    marca: "Tesla",
    modelo: "Model 3 Long Range",
    bateria: 75,
    masa: 1847,
    potencia: 366,
    traccion: "AWD",
    posicionMotor: "Delantero + Trasero"
  },

  {
    id: 2,
    marca: "BYD",
    modelo: "Dolphin",
    bateria: 60,
    masa: 1658,
    potencia: 150,
    traccion: "FWD",
    posicionMotor: "Delantero"
  },

  {
    id: 3,
    marca: "Hyundai",
    modelo: "Kona Electric",
    bateria: 64,
    masa: 1743,
    potencia: 150,
    traccion: "FWD",
    posicionMotor: "Delantero"
  },

  {
    id: 4,
    marca: "Nissan",
    modelo: "Leaf e+",
    bateria: 62,
    masa: 1731,
    potencia: 160,
    traccion: "FWD",
    posicionMotor: "Delantero"
  },

  {
    id: 5,
    marca: "Kia",
    modelo: "EV6",
    bateria: 77.4,
    masa: 1985,
    potencia: 239,
    traccion: "RWD",
    posicionMotor: "Trasero"
  }

];