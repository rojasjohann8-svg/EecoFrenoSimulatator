type Props = {
  children: React.ReactNode;
};

function Dashboard({ children }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
        gap: "20px",
        padding: "20px",
        alignItems: "start",
      }}
    >
      {children}
    </div>
  );
}

export default Dashboard;