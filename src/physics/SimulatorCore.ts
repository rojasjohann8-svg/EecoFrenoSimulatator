import type { VehicleSpecs } from "../data/vehicleSpecs";

import { calcularEnergiaCinetica } from "./Energy";
import { calcularDistancia, calcularTiempo } from "./Braking";
import { calcularAutonomia } from "./Autonomy";
import { calcularSaturacionMotor } from "./MotorSaturation";
import { calcularTransferenciaPeso } from "./DynamicWeightTransfer";

export interface ResultadoSimulacion {

    masaTotal: number;

    energia: number;

    energiaRecuperada: number;

    distancia: number;

    tiempo: number;

    torque: number;

    rpm: number;

    saturado: boolean;

}

export function simularSistema(

    masaVehiculo: number,

    velocidad: number,

    desaceleracion: number,

    pesoCarga: number,

    _posicionCarga: string,

    vehiculo: VehicleSpecs

): ResultadoSimulacion {

    const masaTotal = masaVehiculo + pesoCarga;

    const energia = calcularEnergiaCinetica(

        masaTotal,

        velocidad

    );

    const distancia = calcularDistancia(

        velocidad,

        desaceleracion

    );

    const tiempo = calcularTiempo(

        velocidad,

        desaceleracion

    );

    const saturacion = calcularSaturacionMotor(

        vehiculo,

        masaTotal,

        velocidad,

        desaceleracion

    );

    calcularTransferenciaPeso(

        vehiculo,

        masaTotal,

        desaceleracion

    );

    calcularAutonomia(

        vehiculo,

        pesoCarga,

        velocidad

    );

    const energiaRecuperada =

        energia * 0.70;

    const rpm =

        velocidad * 90;

    const torque =

        (vehiculo.potenciaMotor * 9550) /

        Math.max(rpm, 1);

    return {

        masaTotal,

        energia,

        energiaRecuperada,

        distancia,

        tiempo,

        torque,

        rpm,

        saturado: saturacion.saturado

    };

}