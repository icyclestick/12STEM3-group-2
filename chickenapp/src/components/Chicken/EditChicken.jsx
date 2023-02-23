import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getChickenById } from "../../api"
import { editChickenData } from "../../api";
import DatePicker from "react-datepicker"
export const EditChicken = () => {
    const [editChicken, setEditChicken] = useState({
        username: '',
        tag: '',
        type: '',
        initWeight: '',
        finalWeight: '',
        date: new Date(),
        users: [],
        calorieAte: ''
    })
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        getChickenById(id).then(response => {
            setEditChicken({
                username: response.username,
                tag: response.tag,
                type: response.type,
                initWeight: response.initWeight,
                finalWeight: response.finalWeight,
                date: Date(response.date),
                users: [response.username],
                calorieAte: response.calorieAte
            })
        })
            .catch(error => {
                console.log(error)
            })
    }, [id])
    function handleChange(event) {
        const { name, value } = event.target
        setEditChicken(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    function onChangeDate(date) {
        console.log(date.toISOString());
        setEditChicken({ date: date })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const newchickenData = {
            tag: editChicken.tag,
            type: editChicken.type,
            initWeight: editChicken.initWeight,
            finalWeight: editChicken.finalWeight,
            username: editChicken.username,
            date: editChicken.date,
            calorieAte: editChicken.calorieAte
        }
        console.log(newchickenData)
        editChickenData(id, newchickenData)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }
    return <><div className="form-components">
        <h3 className="calculator-title">Create Chicken!</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="user" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username: </label>
            <select className="form-control" name="user" required value={editChicken.selected} onChange={handleChange} class="px-5 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                {
                    editChicken.users.map(function (user) {
                        return <option
                            key={user}
                            value={user}>{user}
                        </option>
                    })
                }
            </select>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="tag" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tag</label>
                    <input name="tag" onChange={handleChange} value={editChicken.tag} type="text" id="tag" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="0000" required="" />
                </div>
                <div>
                    <label htmlFor="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type</label>
                    <input name="type" onChange={handleChange} value={editChicken.type} type="text" id="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Darag Chicken" required="" />
                </div>
                <div>
                    <label htmlFor="init_weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Initial Weight</label>
                    <input name="initWeight" onChange={handleChange} value={editChicken.initWeight} type="text" id="init_weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="15kg" required="" />
                </div>
                <div>
                    <label htmlFor="target_weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Final Weight</label>
                    <input name="finalWeight" onChange={handleChange} value={editChicken.finalWeight} type="text" id="target_weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="20kg" required="" />
                </div>
                <div>
                    <label htmlFor="calorieAte" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Calories Ate</label>
                    <input name="calorieAte" onChange={handleChange} value={editChicken.calorieAte} type="text" id="calorie_ate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="20kg" required="" />
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
                    <DatePicker
                        selected={new Date(editChicken.date)}
                        onChange={(date) => onChangeDate(date)}
                        name="date"
                        value={editChicken.date}
                    //https://github.com/date-fns/date-fns/issues/376 error in date-fns
                    />
                </div>
                <button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
            </div>
        </form>

    </div></>
}
    // return <>{route.params.id}</>