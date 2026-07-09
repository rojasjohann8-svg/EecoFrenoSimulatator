type Props = {
  peso: number;
  setPeso: (peso: number) => void;

  posicion: string;
  setPosicion: (posicion: string) => void;
};

function LoadSelector({
  peso,
  setPeso,
  posicion,
  setPosicion,
}: Props) {

  return (

    <div className="card">

      <h2>Carga adicional</h2>

      <label>Peso adicional (kg)</label>

      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(Number(e.target.value))}
      />

      <br />
      <br />

      <label>Ubicación de la carga</label>

      <select
        value={posicion}
        onChange={(e) => setPosicion(e.target.value)}
      >

        <option>Maletero</option>

        <option>Asientos Traseros</option>

        <option>Asiento Copiloto</option>

        <option>Techo</option>

        <option>Remolque</option>

      </select>

    </div>

  );

}

export default LoadSelector;