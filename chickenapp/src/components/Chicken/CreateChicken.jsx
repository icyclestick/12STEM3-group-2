import axios from 'axios';
import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createChicken } from "../../api"
import '../../App.css'
import { handleCalculation } from './CalculateCalories';
export const CreateChicken = () => {
    const [createdChicken, setCreatedChicken] = useState({
        username: '',
        tag: '',
        type: '',
        weight: '',
        targetWeight: '',
        date: new Date(),
        users: [],
        calorieAte: '',
    })
    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(response => {
                if (response.data.length > 0) {
                    setCreatedChicken({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    function handleChange(event) {
        let eName, eValue;
        if (event.target) {
            const { name, value } = event.target
            // console.log(name, value)
            eName = name
            eValue = value
        }
        else {
            eName = "date"
            eValue = event
        }
        //console.log(evName,evValue)
        setCreatedChicken(prev => {
            return {
                ...prev,
                [eName]: eValue
            }
        })
        // const {name, date, value} = event.target

        // setCreatedChicken(prev => {
        //     return {
        //         ...prev,
        //         [name]: name === "date" ? date : value
        //     }
        // })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const chickenData = {
            tag: createdChicken.tag,
            type: createdChicken.type,
            weight: createdChicken.weight,
            targetWeight: createdChicken.targetWeight,
            username: createdChicken.username,
            date: createdChicken.date,
            calorieAte: createdChicken.calorieAte
        }
        console.log(chickenData)
        // axios.post('http://localhost:5000/chicken/add', chickenData)
        //     .then(res => console.log(res.data))
        //     .catch(error => console.log(error))
        createChicken(chickenData).then(response => console.log(response))

        const result = handleCalculation(chickenData)
        alert(result)
    }
    return <><div className="form-components">
        <h3 className="calculator-title" class="text-4xl font-extrabold dark:text-white">Create Chicken!</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="user" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username: </label>
            <select className="form-control" name="user" required value={createdChicken.selected} onChange={handleChange} class="px-5 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                {
                    createdChicken.users.map(function (user) {
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
                    <input name="tag" onChange={handleChange} value={createdChicken.tag} type="text" id="tag" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="0000" required="" />
                </div>
                <div>
                    <label htmlFor="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type</label>
                    <input name="type" onChange={handleChange} value={createdChicken.type} type="text" id="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Darag Chicken" required="" />
                </div>
                <div>
                    <label htmlFor="weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Weight</label>
                    <input name="weight" onChange={handleChange} value={createdChicken.weight} type="text" id="weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="15kg" required="" />
                </div>
                <div>
                    <label htmlFor="target_weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Target Weight</label>
                    <input name="targetWeight" onChange={handleChange} value={createdChicken.targetWeight} type="text" id="target_weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="20kg" required="" />
                </div>
                <div>
                    <label htmlFor="calorieAte" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Calories Ate</label>
                    <input name="calorieAte" onChange={handleChange} value={createdChicken.calorieAte} type="text" id="calorie_ate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="20kg" required="" />
                </div>
                <div>
                    <label htmlFor="date"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
                    <DatePicker
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        selected={createdChicken.date}
                        onChange={(date) => handleChange(date)}
                        name="date"
                        value={createdChicken.date}

                    />
                </div>
                <button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
            </div>
        </form>

    </div></>
}