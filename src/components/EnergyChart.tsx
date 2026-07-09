import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

type Props = {
  energia: number;
  energiaRecuperada: number;
};

function EnergyChart({
  energia,
  energiaRecuperada
}: Props) {

  const data = [
    {
      nombre: "Energía Inicial",
      energia: energia
    },
    {
      nombre: "Energía Recuperada",
      energia: energiaRecuperada
    }
  ];

  return (
    <div
      style={{
        width: "100%",
        height: 300
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="nombre" />

          <YAxis />

          <Tooltip
    formatter={(value:any)=>[
        `${Number(value).toFixed(0)} J`,
        "Energía"
    ]}
/>

          <Line
            type="monotone"
            dataKey="energia"
            stroke="#2e86de"
            strokeWidth={3}
            dot={{ r: 6 }}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EnergyChart;