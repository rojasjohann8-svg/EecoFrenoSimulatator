// ==========================================
// EcoFreno Simulator
// Modelo físico del motor eléctrico
// ==========================================

export interface ResultadoMotor {

    torque: number;

    rpm: number;

    potencia: number;

}

export function calcularMotor(

    velocidad: number,

    potenciaMotor: number,

    fuerza: number

): ResultadoMotor {

    // Conversión km/h -> m/s
    const velocidadMS = Math.max(velocidad / 3.6, 0.5);

    // Radio promedio de rueda (m)
    const radioRueda = 0.31;

    // RPM aproximadas
    const rpm =
        (velocidadMS / (2 * Math.PI * radioRueda)) * 60;

    // Velocidad angular
    const omega =
        rpm * 2 * Math.PI / 60;

    // Potencia en Watts
    const potencia =
        potenciaMotor * 1000;

    // Torque máximo disponible
    const torqueDisponible =
        potencia / omega;

    // Torque requerido por el frenado
    const torqueNecesario =
        fuerza * radioRueda;

    // El motor nunca entrega más torque del disponible
    const torque =
        Math.min(torqueDisponible, torqueNecesario);

    return {

        torque,

        rpm,

        potencia

    };

}