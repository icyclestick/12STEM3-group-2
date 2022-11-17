import { useState, useEffect } from "react"
import axios from 'axios';
export default function Forms(props){

    const [formData, setFormData] = useState({
        tag: "",
        type: "",
        weight: "",
        targetWeight: ""
      })
    
      function handleChange(event){
        console.log(event)
        // const {name, value} = event.target
        console.log(event.value)
        setFormData(prevData => {
          return {
            ...prevData,
            [event.target.name]: event.target.value
          }
        })
      }

      function handleSubmit(event){
        event.preventDefault()
        const userData = {
          tag: formData.tag,
          type: formData.type,
          weight: formData.weight,
          targetWeight: formData.targetWeight
      }
        axios.post(`http://localhost:4000/api/create`, userData)
        .then(res => console.log(res.data))
        setFormData({
          tag: "",
          type: "",
          weight: "",
          targetWeight: ""
        })
      }

    return (
      
<form onSubmit={handleSubmit}>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="tag" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tag</label>
            <input name="tag" onChange={handleChange} value={formData.tag}type="text" id="tag" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="0000" required=""/>
        </div>
        <div>
            <label htmlFor="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type</label>
            <input name="type" onChange={handleChange} value={formData.type}type="text" id="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Darag Chicken" required=""/>
        </div>
        <div>
            <label htmlFor="weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Weight</label>
            <input name="weight" onChange={handleChange} value={formData.weight}type="text" id="weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="15kg" required=""/>
        </div>  
        <div>
            <label htmlFor="target_weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Target Weight</label>
            <input name="targetWeight" onChange={handleChange} value={formData.targetWeight}type="text" id="target_weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="20kg" required=""/>
        </div>
      <button type="submit" onChange={handleSubmit} class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
    </div>
</form>

    )
}