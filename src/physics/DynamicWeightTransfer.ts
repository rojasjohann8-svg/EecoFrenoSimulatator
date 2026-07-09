import type { VehicleSpecs } from "../data/vehicleSpecs";


export interface WeightTransferResult {

    transferencia:number;

    delantero:number;

    trasero:number;

}


export function calcularTransferenciaPeso(

    vehiculo:VehicleSpecs,

    masaTotal:number,

    desaceleracion:number

):WeightTransferResult{


    const g = 9.81;


    // Transferencia de carga:
    // ΔF = (m*a*h)/L

    const transferencia = 
        (masaTotal * desaceleracion * vehiculo.alturaCentroGravedad)
        /
        vehiculo.distanciaEntreEjes;


    const cargaDelantera =
        (masaTotal * g * vehiculo.distribucionDelantera / 100)
        +
        transferencia;


    const cargaTrasera =
        (masaTotal * g * vehiculo.distribucionTrasera / 100)
        -
        transferencia;



    return {

        transferencia,

        delantero:cargaDelantera,

        trasero:cargaTrasera

    };

}