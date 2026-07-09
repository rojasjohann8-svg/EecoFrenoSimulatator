import {

LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
ResponsiveContainer

} from "recharts";

type Props={

datos:any[];

};

function SpeedChart({datos}:Props){

return(

<ResponsiveContainer width="100%" height={300}>

<LineChart data={datos}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="tiempo"/>

<YAxis/>

<Tooltip/>

<Line

type="monotone"

dataKey="velocidad"

/>

</LineChart>

</ResponsiveContainer>

);

}

export default SpeedChart;