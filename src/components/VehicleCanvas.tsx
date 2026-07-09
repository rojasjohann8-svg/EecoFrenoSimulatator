import "./VehicleCanvas.css";

interface VehicleCanvasProps {
  posicionCarga: string;
  motor: "FWD" | "RWD" | "AWD";
  peso: number;
}

export default function VehicleCanvas({
  posicionCarga,
  motor,
  peso,
}: VehicleCanvasProps) {

  //===========================
  // Posición del motor
  //===========================

  let motorX = 120;

  if (motor === "RWD") motorX = 380;
  if (motor === "AWD") motorX = 250;

  //===========================
  // Posición de la carga
  //===========================

  let cargaX = 380;
  let cargaY = 90;

  switch (posicionCarga) {

    case "Asiento Copiloto":
      cargaX = 150;
      cargaY = 90;
      break;

    case "Asientos Traseros":
      cargaX = 250;
      cargaY = 90;
      break;

    case "Maletero":
      cargaX = 380;
      cargaY = 90;
      break;

    case "Techo":
      cargaX = 250;
      cargaY = 45;
      break;

    case "Remolque":
      cargaX = 470;
      cargaY = 110;
      break;
  }

  return (

    <div className="vehicle-container">

      <svg
        className="vehicle-svg"
        viewBox="0 0 500 220"
      >

        {/* Carrocería */}

        <rect
          x="60"
          y="60"
          width="380"
          height="95"
          rx="40"
          fill="#E7EDF3"
          stroke="#222"
          strokeWidth="3"
        />

        {/* Batería */}

        <rect
          x="155"
          y="105"
          width="190"
          height="22"
          rx="6"
          fill="#2ECC71"
        />

        {/* Ruedas */}

        <circle
          cx="130"
          cy="170"
          r="22"
          fill="#222"
        />

        <circle
          cx="370"
          cy="170"
          r="22"
          fill="#222"
        />

        {/* Motor */}

        <circle
          cx={motorX}
          cy="80"
          r="12"
          fill="#1565C0"
        />

        <text
          x={motorX}
          y="62"
          textAnchor="middle"
          fontSize="10"
          fill="#1565C0"
        >
          Motor
        </text>

        {/* Carga */}

        <rect
          x={cargaX - 15}
          y={cargaY}
          width="30"
          height="30"
          rx="5"
          fill="#E53935"
        />

        <text
          x={cargaX}
          y={cargaY - 8}
          textAnchor="middle"
          fontSize="10"
          fill="#E53935"
        >
          {peso} kg
        </text>

        {/* Remolque */}

        {posicionCarga === "Remolque" && (

          <>
            <line
              x1="440"
              y1="110"
              x2="460"
              y2="110"
              stroke="#444"
              strokeWidth="3"
            />

            <rect
              x="460"
              y="90"
              width="28"
              height="40"
              fill="#999"
            />

            <circle
              cx="468"
              cy="138"
              r="6"
              fill="#222"
            />

            <circle
              cx="482"
              cy="138"
              r="6"
              fill="#222"
            />
          </>

        )}

      </svg>

      <div className="vehicle-info">

        <span>
          <strong>Tracción:</strong> {motor}
        </span>

        <span>
          <strong>Carga:</strong> {posicionCarga}
        </span>

        <span>
          <strong>Peso:</strong> {peso} kg
        </span>

      </div>

    </div>

  );
}