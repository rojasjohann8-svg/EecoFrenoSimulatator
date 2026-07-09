type HeaderProps = {
  titulo: string;
  subtitulo: string;
};

function Header({ titulo, subtitulo }: HeaderProps) {
  return (
    <header
      style={{
        background: "#111827",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h1>{titulo}</h1>

      <p>{subtitulo}</p>
    </header>
  );
}

export default Header;