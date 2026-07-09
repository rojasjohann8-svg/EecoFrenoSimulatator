export interface ResultadoCarga{

    ejeDelantero:number;

    ejeTrasero:number;

    transferencia:number;

}

export function calcularCargaDinamica(

    masa:number,

    desaceleracion:number,

    alturaCG:number,

    distanciaEntreEjes:number,

    pesoDelantero:number,

    pesoTrasero:number

):ResultadoCarga{

    const g=9.81;

    const peso=masa*g;

    const transferencia=

        (masa*

        desaceleracion*

        alturaCG)

        /

        distanciaEntreEjes;

    return{

        ejeDelantero:

            peso*

            (pesoDelantero/100)

            +

            transferencia,

        ejeTrasero:

            peso*

            (pesoTrasero/100)

            -

            transferencia,

        transferencia

    };

}