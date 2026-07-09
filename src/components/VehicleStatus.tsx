type Props = {
  velocidad: number;
  masa: number;
  bateria: number;
  autonomia: number;
  torque: number;
  rpm: number;
  saturado: boolean;
};

function VehicleStatus({
  velocidad,
  masa,
  bateria,
  autonomia,
  torque,
  rpm,
  saturado,
}: Props) {

  const colorAutonomia =
    autonomia > 400
      ? "#2ecc71"
      : autonomia > 250
      ? "#f39c12"
      : "#e74c3c";

  const colorRPM =
    rpm < 6000
      ? "#2ecc71"
      : rpm < 9000
      ? "#f39c12"
      : "#e74c3c";

  const colorTorque =
    torque < 250
      ? "#2ecc71"
      : torque < 450
      ? "#f39c12"
      : "#e74c3c";

  return (

    <div className="resultados">

      <h2>Estado del Vehículo</h2>

      <table style={{ width: "100%" }}>

        <tbody>

          <tr>
            <td><strong>Velocidad</strong></td>
            <td>{velocidad.toFixed(0)} km/h</td>
          </tr>

          <tr>
            <td><strong>Masa Total</strong></td>
            <td>{masa.toFixed(0)} kg</td>
          </tr>

          <tr>
            <td><strong>Batería</strong></td>
            <td>{bateria.toFixed(1)} kWh</td>
          </tr>

          <tr>
            <td><strong>Autonomía</strong></td>
            <td style={{ color: colorAutonomia }}>
              {autonomia.toFixed(1)} km
            </td>
          </tr>

          <tr>
            <td><strong>Torque</strong></td>
            <td style={{ color: colorTorque }}>
              {torque.toFixed(1)} Nm
            </td>
          </tr>

          <tr>
            <td><strong>RPM</strong></td>
            <td style={{ color: colorRPM }}>
              {rpm.toFixed(0)}
            </td>
          </tr>

          <tr>
            <td><strong>Estado</strong></td>

            <td
              style={{
                color: saturado ? "#e74c3c" : "#2ecc71",
                fontWeight: "bold",
                fontSize: 18
              }}
            >
              {saturado ? "⚠ Motor Saturado" : "✅ Regenerando"}
            </td>

          </tr>

        </tbody>

      </table>

    </div>

  );
}

export default VehicleStatus;