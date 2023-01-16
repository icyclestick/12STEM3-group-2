import { Link } from 'react-router-dom'
export const Table = (props) => {
    return <><tbody>
        {props.chickenList.chicken?.map(d => (
            <tr key={d._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{d.username}</th>
                <td class="py-4 px-6">{d.tag}</td>
                <td class="py-4 px-6">{d.type}</td>
                <td class="py-4 px-6">{d.initWeight}</td>
                <td class="py-4 px-6">{d.finalWeight}</td>
                <td class="py-4 px-6">{d.date}</td>
                <td class="py-4 px-6">{d.calorieAte}</td>
                {/* <Link to={"create"} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">CREATE</Link> */}
                <div class='py-4 px-6'>
                    <Link to={"/chicken/update/" + d._id} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">EDIT</Link>
                    <button onClick={() => { props.deleteChicken(d._id) }} class="ml-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">DELETE</button>
                </div>
            </tr>
        ))}
    </tbody></>
}

