type Props={

    energia:number;

    eficiencia:number;

    porcentaje:number;

    saturado:boolean;

};

function RegenerationPanel({

    energia,

    eficiencia,

    porcentaje,

    saturado

}:Props){

    return(

<div className="resultados">

<h2>

Frenado Regenerativo

</h2>

<p>

⚡ Energía recuperada

{energia.toFixed(0)} J

</p>

<p>

🔋 Eficiencia

{(eficiencia*100).toFixed(1)} %

</p>

<p>

⚙ Uso del motor

{(porcentaje*100).toFixed(1)} %

</p>

<p>

Estado

{saturado?

" 🔴 Motor Saturado"

:

" 🟢 Funcionando"}

</p>

</div>

    );

}

export default RegenerationPanel;