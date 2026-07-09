// ==========================================
// EcoFreno Simulator
// Energía cinética
// ==========================================

export function calcularEnergiaCinetica(

    masa:number,

    velocidad:number

):number{

    // km/h -> m/s
    const velocidadMS = velocidad / 3.6;

    // Energía en Joules
    return 0.5 * masa * velocidadMS * velocidadMS;

}