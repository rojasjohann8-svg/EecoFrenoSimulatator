import { vehiculos } from "../data/vehicles";

type Props = {
  onSeleccionar: (masa: number) => void;
};

function VehicleSelector({ onSeleccionar }: Props) {

  return (

    <div style={{ marginBottom: "20px" }}>

      <label>Vehículo</label>

      <br />

      <select
        onChange={(e) => {

          const vehiculo = vehiculos.find(
            v => v.id === Number(e.target.value)
          );

          if (vehiculo) {
            onSeleccionar(vehiculo.masa);
          }

        }}
      >

        <option>Seleccione...</option>

        {vehiculos.map((v) => (

          <option
            key={v.id}
            value={v.id}
          >

            {v.marca} {v.modelo}

          </option>

        ))}

      </select>

    </div>

  );

}

export default VehicleSelector;