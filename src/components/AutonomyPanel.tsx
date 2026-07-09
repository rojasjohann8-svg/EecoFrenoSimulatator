type Props = {

    autonomia:number;

    consumo:number;

};

function AutonomyPanel({

    autonomia,

    consumo

}:Props){

    return(

        <div className="resultados">

            <h2>Autonomía</h2>

            <p>

                <strong>Autonomía estimada:</strong>

                {" "}

                {autonomia.toFixed(1)} km

            </p>

            <p>

                <strong>Consumo:</strong>

                {" "}

                {consumo.toFixed(3)} kWh/km

            </p>

        </div>

    );

}

export default AutonomyPanel;