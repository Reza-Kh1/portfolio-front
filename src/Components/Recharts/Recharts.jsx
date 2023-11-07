import { ResponsiveContainer, XAxis, Legend, YAxis, Line, LineChart, CartesianGrid, Tooltip } from "recharts"
export default function Recharts({ title, data, dataKesy, dataKesy2, dataKesy3,color3, grid }) {
    return (
        <>
            <h3 className="mb-3 text-center text-info">{title}</h3>
            <ResponsiveContainer width='100%' height='100%' aspect={4}>
                <LineChart data={data} margin={{ right: 20 }}>
                    <XAxis dataKey="name" stroke="#979797" />
                    <Line dataKey={dataKesy} stroke="#239e18" type="monotone" />
                    <Line dataKey={dataKesy2} stroke="#9e1818" type="monotone" />
                    {dataKesy3 && <Line dataKey={dataKesy3} stroke={color3} type="monotone" />}
                    <Tooltip />
                    <YAxis stroke="#979797" tickMargin={45} />
                    {grid && <CartesianGrid stroke="#5e5d5d" strokeDasharray="5 5" />}
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}
