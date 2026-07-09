type Props = {
  saturado: boolean;
  velocidad: number;
};

function SystemHealth({ saturado, velocidad }: Props) {

  let color = "#2ecc71";
  let texto = "Sistema Normal";

  if (velocidad > 110) {
    color = "#f39c12";
    texto = "Velocidad Elevada";
  }

  if (saturado) {
    color = "#e74c3c";
    texto = "Motor Saturado";
  }

  return (

    <div>

      <h3>Estado del Sistema</h3>

      <div
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          background: color,
          marginBottom: "10px",
        }}
      />

      <b>{texto}</b>

    </div>

  );

}

export default SystemHealth;