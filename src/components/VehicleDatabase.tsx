import { vehiculos } from "../data/vehicleSpecs";
import type { VehicleSpecs } from "../data/vehicleSpecs";
type Props = {
  vehiculo: VehicleSpecs;
  setVehiculo: (v: VehicleSpecs) => void;
};

function VehicleDatabase({ vehiculo, setVehiculo }: Props) {
  return (
    <div className="resultados">

      <h2>Vehículo</h2>

      <select
        value={vehiculo.modelo}
        onChange={(e) => {

          const seleccionado = vehiculos.find(
            (v) => v.modelo === e.target.value
          );

          if (seleccionado) {
            setVehiculo(seleccionado);
          }

        }}
      >

        {vehiculos.map((v) => (

          <option key={v.modelo} value={v.modelo}>

            {v.marca} - {v.modelo}

          </option>

        ))}

      </select>

      <p><strong>Masa:</strong> {vehiculo.masa} kg</p>

      <p><strong>Batería:</strong> {vehiculo.bateria} kWh</p>

      <p><strong>Motor:</strong> {vehiculo.potenciaMotor} kW</p>

      <p><strong>Autonomía:</strong> {vehiculo.autonomia} km</p>

      <p><strong>Tracción:</strong> {vehiculo.traccion}</p>

    </div>
  );
}

export default VehicleDatabase;