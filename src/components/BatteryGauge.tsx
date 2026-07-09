type Props = {
  bateria: number;
  autonomia: number;
};

function BatteryGauge({ bateria, autonomia }: Props) {
  const porcentaje = Math.min(100, Math.max(0, (autonomia / 600) * 100));

  let color = "#2ecc71";

  if (porcentaje < 60) color = "#f1c40f";
  if (porcentaje < 30) color = "#e74c3c";

  return (
    <div>

      <h3>Batería</h3>

      <div
        style={{
          width: "100%",
          height: "28px",
          border: "2px solid #222",
          borderRadius: "8px",
          overflow: "hidden",
          background: "#ddd",
        }}
      >
        <div
          style={{
            width: `${porcentaje}%`,
            height: "100%",
            background: color,
            transition: "0.5s",
          }}
        />
      </div>

      <p>
        <b>{bateria} kWh</b>
      </p>

      <p>
        Autonomía estimada: <b>{autonomia.toFixed(0)} km</b>
      </p>

    </div>
  );
}

export default BatteryGauge;