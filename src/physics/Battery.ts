export interface ResultadoBateria{

autonomia:number;

energiaDisponible:number;

}

export function calcularBateria(

capacidad:number,

consumo:number

):ResultadoBateria{

const autonomia=

(capacidad/consumo)*100;

return{

autonomia,

energiaDisponible:capacidad

};

}