import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Recharts2({ title, data, dataKesy, dataKesy2, dataKesy3, color3 }) {
    return (
        <>
            <h3 className="mb-3 text-center text-info">{title}</h3>
            <ResponsiveContainer width="100%" height="90%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickMargin={45} />
                    <Tooltip />
                    {dataKesy2 && <Area type="monotone" dataKey={dataKesy2} stackId="1" stroke="#9e1818" fill="#b81446" />}
                    {dataKesy && <Area type="monotone" dataKey={dataKesy} stackId="1" stroke="#239e18" fill="#3e7b24" />}
                    {dataKesy3 && <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="color3" />}
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}
