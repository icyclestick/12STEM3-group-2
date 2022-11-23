import React from 'react'
import { Link } from 'react-router-dom'

export default function Chicken(props){ 
        <th >
            <td>{props.chicken.username}</td>
            <td>{props.chicken.tag}</td>
            <td>{props.chicken.type}</td>
            <td>{props.chicken.weight}</td>
            <td>{props.chicken.targetWeight}</td>
            <td>{props.chicken.date}</td>
            <td>
              <Link to={"/edit/"+props.chicken._id}>edit</Link>
              <button onClick={() => {props.deleteChicken(props.exercise._id)}}>delete</button>
            </td>
        </th>
          console.log(props)
  }
