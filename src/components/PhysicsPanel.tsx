type Props = {

    energia:number;

    distancia:number;

    tiempo:number;

};

function PhysicsPanel({

    energia,

    distancia,

    tiempo

}:Props){

    return(

        <div className="resultados">

            <h2>Resultados Físicos</h2>

            <p>

⚡ Energía cinética:

{" "}

{energia.toLocaleString(undefined, {

maximumFractionDigits:0

})}

J

</p>

            <p>🛑 Distancia de frenado: {distancia.toFixed(2)} m</p>

            <p>⏱ Tiempo de frenado: {tiempo.toFixed(2)} s</p>

        </div>

    );

}

export default PhysicsPanel;