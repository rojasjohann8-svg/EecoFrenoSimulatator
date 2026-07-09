export interface EstadoSimulacion{

    tiempo:number;

    velocidad:number;

    energia:number;

    regeneracion:number;

}

export function simularFrenado(

    velocidadInicial:number,

    desaceleracion:number,

    energiaInicial:number

){

    const datos:EstadoSimulacion[]=[];

    let velocidad=velocidadInicial/3.6;

    let energia=energiaInicial;

    let tiempo=0;

    while(velocidad>0){

        velocidad-=desaceleracion*0.1;

        if(velocidad<0){

            velocidad=0;

        }

        // Disminución proporcional de la energía
        energia = energia * 0.96;

        const regeneracion = energia * 0.70;

        datos.push({

            tiempo,

            velocidad:velocidad*3.6,

            energia,

            regeneracion

        });

        tiempo+=0.1;

    }

    return datos;

}