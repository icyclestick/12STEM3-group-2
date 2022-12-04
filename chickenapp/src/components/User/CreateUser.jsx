import { useState } from "react"
import axios from 'axios'
import { createUserApi } from '../../api'
export const CreateUser = () => {
    const [createUser, setCreateUser] = useState({
        username: ''
    })
    function onChangeUsername(e) {
        setCreateUser({
            username: e.target.value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: createUser.username,
        }
        console.log(user)

        // axios.post(`http://localhost:5000/users/add`, user)
        //     .then(res => console.log(res.data))
        // setCreateUser({
        //     username: ''
        // })

        createUserApi(user).then(response => console.log)
        setCreateUser({
            username: ''
        })
    }
    return <><div className="form-components">
        <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input onChange={onChangeUsername} value={createUser.username} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div class="mb-6">
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Create User!
                    </button>
                </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
                &copy;2022 GROUP2 12STEM 3. All rights reserved.
            </p>
        </div>
    </div></>

}