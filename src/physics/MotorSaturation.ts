import type { VehicleSpecs } from "../data/vehicleSpecs";

export interface SaturationResult {

    fuerzaRegenerativa: number;

    fuerzaNecesaria: number;

    porcentajeUso: number;

    saturado: boolean;

    energiaRecuperada: number;

}

export function calcularSaturacionMotor(

    vehiculo: VehicleSpecs,

    masaTotal: number,

    velocidad: number,

    desaceleracion: number

): SaturationResult {

    const velocidadMS = Math.max(velocidad / 3.6, 0.5);

    // Fuerza requerida para frenar
    const fuerzaNecesaria =
        masaTotal *
        desaceleracion;

    // Potencia regenerativa máxima del vehículo
    const potenciaRegenerativa =
        vehiculo.regeneracionMaxima *
        1000;

    // Fuerza regenerativa disponible
    const fuerzaRegenerativa =
        potenciaRegenerativa /
        velocidadMS;

    let porcentajeUso =
        fuerzaNecesaria /
        fuerzaRegenerativa;

    porcentajeUso =
        Math.min(
            Math.max(porcentajeUso, 0),
            1
        );

    const energiaRecuperada =
        vehiculo.regeneracionMaxima *
        porcentajeUso;

    return {

        fuerzaRegenerativa,

        fuerzaNecesaria,

        porcentajeUso,

        saturado: porcentajeUso >= 1,

        energiaRecuperada

    };

}