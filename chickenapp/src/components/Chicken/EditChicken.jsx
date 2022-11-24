import { useParams } from "react-router"
export const EditChicken = () => {
    const route = useParams();
    // ## TODO Call to web api and put supply the input elements
    return <>{route.id}</>
}