export const Table = (props) => {
    return <><tbody>
        {props.chickenList.chicken?.map(d => (
            <tr key={d._id}>
                <td>{d.username}</td>
                <td>{d.tag}</td>
                <td>{d.type}</td>
                <td>{d.weight}</td>
                <td>{d.targetWeight}</td>
                <td>{d.date}</td>
            </tr>
        ))}
    </tbody></>
}

