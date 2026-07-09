type Props = {
  titulo: string;
  children: React.ReactNode;
};

function InfoCard({ titulo, children }: Props) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "14px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        border: "1px solid #ddd",

        width: "100%",
        maxWidth: "600px",
        boxSizing: "border-box",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          marginBottom: "15px",
          color: "#111",
          borderBottom: "2px solid #1e88e5",
          paddingBottom: "8px",
          textAlign: "center",
        }}
      >
        {titulo}
      </h2>

      {children}
    </div>
  );
}

export default InfoCard;