import './App.css'
import { useState } from 'react'

 
 export default function Main(){
    const [data, setData] = useState(null)

    .useEffect(()=>{
      fetch('/')
      .then((res) => res.json())
      .then((data) => setData(data.message))
    },[])

    return (
        <header className='grid-col-span-2 header'>
            <h1 className='main-title'>Calorie Calculator</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>{!data ? "loading..." : data}</p>
      </header>
    )
}