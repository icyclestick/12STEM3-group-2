import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getChickenById } from "../../api"
export const EditChicken = () => {
    const [editChicken, setEditChicken] = useState({
        username: '',
        tag: '',
        type: '',
        weight: '',
        targetWeight: '',
        date: new Date(),
        users: []
    })
    const route = useParams();
    // ## TODO Call to web api and put supply the input elements
   useEffect(() => {
        getChickenById().then(response => {
            setEditChicken({
                username: response,
                tag: response,
                type: response,
                weight: response,
                targetWeight: response,
                date: new Date(response),
                users: [response]
            })
        }).catch(error => {
            console.log(error)
        })
    }, [])
    return <>{route.params.id}</>
}