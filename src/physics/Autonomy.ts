import type { VehicleSpecs } from "../data/vehicleSpecs";

export interface ResultadoBateria{

    autonomia:number;

    consumo:number;

    energiaDisponible:number;

}

export function calcularAutonomia(

    vehiculo:VehicleSpecs,

    pesoExtra:number,

    velocidad:number

):ResultadoBateria{

    const masaTotal = vehiculo.masa + pesoExtra;

    const consumoBase =
        vehiculo.bateria /
        vehiculo.autonomia;

    // Penalización por peso
    const factorPeso =
        1 +
        (pesoExtra / vehiculo.masa) * 0.60;

    // Penalización por velocidad
    const factorVelocidad =
        1 +
        Math.pow(
            velocidad / 100,
            2
        ) * 0.22;

    const consumo =
        consumoBase *
        factorPeso *
        factorVelocidad;

    const autonomia =
        vehiculo.bateria /
        consumo;

    return{

        autonomia,

        consumo,

        energiaDisponible:vehiculo.bateria

    };

}