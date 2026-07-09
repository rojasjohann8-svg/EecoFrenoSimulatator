interface Props {

    delantero:number;

    trasero:number;

}


export default function WeightTransferPanel({

    delantero,

    trasero

}:Props){


return (

<div>

<h3>Transferencia de Peso</h3>

<p>
Carga delantera:
{delantero.toFixed(2)} N
</p>


<p>
Carga trasera:
{trasero.toFixed(2)} N
</p>


</div>

)

}