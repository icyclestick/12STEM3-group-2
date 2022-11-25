import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListOfChickens } from "../api"
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
    
    return <>
        <Link to={"create"}>CREATE</Link>
        <Link to={"/chicken/edit/" + 1}>EDIT</Link>
        <div>
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
                                Weight
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Target Weight
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Date
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <Table chickenList={chickenList}/>
                </table>
            </div>
        </div>
    </>
}