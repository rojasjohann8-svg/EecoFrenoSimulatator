import { jsPDF } from "jspdf";

type Props = {
  vehiculo: string;
  velocidad: number;
  masa: number;
  energia: number;
  distancia: number;
  tiempo: number;
  autonomia: number;
  torque: number;
  rpm: number;
};

function ExportPDF(props: Props) {

  function generarPDF() {

    const pdf = new jsPDF();

    pdf.setFontSize(22);
    pdf.text("EcoFreno Simulator", 20, 20);

    pdf.setFontSize(16);
    pdf.text("Informe de Simulación", 20, 35);

    pdf.setFontSize(12);

    pdf.text(`Vehículo: ${props.vehiculo}`,20,55);

    pdf.text(`Velocidad: ${props.velocidad} km/h`,20,65);

    pdf.text(`Masa: ${props.masa.toFixed(0)} kg`,20,75);

    pdf.text(`Energía Cinética: ${props.energia.toFixed(2)} J`,20,85);

    pdf.text(`Distancia de Frenado: ${props.distancia.toFixed(2)} m`,20,95);

    pdf.text(`Tiempo de Frenado: ${props.tiempo.toFixed(2)} s`,20,105);

    pdf.text(`Autonomía: ${props.autonomia.toFixed(1)} km`,20,115);

    pdf.text(`Torque: ${props.torque.toFixed(1)} Nm`,20,125);

    pdf.text(`RPM: ${props.rpm.toFixed(0)}`,20,135);

    pdf.setFontSize(10);

    pdf.text(
      "Generado automáticamente por EcoFreno Simulator",
      20,
      280
    );

    pdf.save("EcoFreno_Reporte.pdf");

  }

  return(

    <button onClick={generarPDF}>

      Descargar Informe PDF

    </button>

  );

}

export default ExportPDF;