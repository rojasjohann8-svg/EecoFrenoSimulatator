export interface ResultadoRegeneracion{

    energiaRecuperada:number;

    eficiencia:number;

    saturado:boolean;

    porcentajeMotor:number;

}

export function calcularRegeneracion(

    energia:number,

    regeneracionMaxima:number,

    pesoExtra:number

):ResultadoRegeneracion{

    // eficiencia base

    let eficiencia = 0.82;

    // baja con el peso

    eficiencia -= pesoExtra / 5000;

    eficiencia = Math.max(0.45, eficiencia);

    let energiaRecuperada =
        energia *
        eficiencia;

    const limite =
        regeneracionMaxima *
        3600;

    if(energiaRecuperada>limite){

        energiaRecuperada=limite;

    }

    const porcentajeMotor =
        energiaRecuperada /
        limite;

    return{

        energiaRecuperada,

        eficiencia,

        saturado:porcentajeMotor>=1,

        porcentajeMotor

    };

}