import { useEffect, useState, } from "react";
import { deleteChickenApi, getListOfChickens } from "../api"
import { Table } from "../components/Table"
export const Chicken = () => {
    const [chickenList, setChickenList] = useState({ chicken: [] })


    useEffect(() => {
        getListOfChickens().then(response => {
            setChickenList({
                chicken: response
            })
        }).catch(error => {
            console.log(error)
        })
    }, [])

    function deleteChicken(id) {
        deleteChickenApi(id).then((response) => console.log(response.data))
        setChickenList({
            chicken: chickenList.chicken.filter((el) => el._id !== id)
        })
    }

    return <>
        <div className="chicken-list">
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Username
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Tag
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Type
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Initial Weight
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Final Weight
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Date
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Calories Eaten
                            </th>
                            <th scope="col" class="py-3 px-6">
                                QrCode
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <Table chickenList={chickenList} key={chickenList._id} deleteChicken={deleteChicken} />
                </table>
            </div>
        </div>
    </>


}