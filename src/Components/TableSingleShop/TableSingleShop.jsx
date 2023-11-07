export default function TableSingleShop(data) {
    return (
        <>
            {data.new.map((i) => (
                <>
                    <tr>
                        <th colSpan={2} className="pt-4 fs-5 text-info">{i.name}</th>
                    </tr>
                    {i.ulti.map((po) => (
                        <tr key={po.id}>
                            <td style={{width:"40%"}}>{po.skils}</td>
                            <td>{po.summery}</td>
                        </tr>
                    ))}
                </>
            ))
            }
        </>
    )
}
