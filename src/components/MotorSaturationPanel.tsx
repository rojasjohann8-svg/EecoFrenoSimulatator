type Props={

    fuerzaNecesaria:number;

    fuerzaRegenerativa:number;

    porcentaje:number;

    saturado:boolean;

};

export default function MotorSaturationPanel({

    fuerzaNecesaria,

    fuerzaRegenerativa,

    porcentaje,

    saturado

}:Props){

    return(

        <div
            style={{

                background:"#fff",

                padding:"18px",

                borderRadius:12,

                boxShadow:"0 2px 8px rgba(0,0,0,.15)",

                color:"#000"

            }}
        >

            <h3>Saturación del Motor</h3>

            <p>

                Fuerza necesaria:

                <strong>

                    {fuerzaNecesaria.toFixed(0)} N

                </strong>

            </p>

            <p>

                Fuerza regenerativa máxima:

                <strong>

                    {fuerzaRegenerativa.toFixed(0)} N

                </strong>

            </p>

            <p>

                Uso del sistema:

                <strong>

                    {(porcentaje*100).toFixed(1)} %

                </strong>

            </p>

            <div
                style={{

                    width:"100%",

                    height:18,

                    background:"#ddd",

                    borderRadius:8,

                    overflow:"hidden"

                }}
            >

                <div
                    style={{

                        width:`${porcentaje*100}%`,

                        height:"100%",

                        background:saturado ? "#e74c3c" : "#2ecc71"

                    }}
                />

            </div>

            <h4 style={{marginTop:15}}>

                {

                    saturado

                    ?

                    "⚠ Motor saturado"

                    :

                    "✅ Recuperación normal"

                }

            </h4>

        </div>

    );

}