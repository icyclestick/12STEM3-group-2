import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

const Chicken = props => (
  <tr class="border-b border-gray-200 dark:border-gray-700">
    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800" >
    <td class="py-4 px-6">{props.chicken.username}</td>
    <td class="py-4 px-6">{props.chicken.tag}</td>
    <td class="py-4 px-6">{props.chicken.type}</td>
    <td class="py-4 px-6">{props.chicken.weight}</td>
    <td class="py-4 px-6">{props.chicken.targetWeight}</td>
    <td class="py-4 px-6">{props.chicken.date.substring(0,10)}</td>
    <td class="py-4 px-6">
    <Link to={"/edit/"+props.chicken._id}>edit</Link> | 
    <button onClick={() => {props.deleteChicken(props.exercise._id)}}>delete</button>
  </td>
</th>
  </tr>
)

export default class ChickenList extends Component {
  constructor(props){
    super(props);

    this.deleteChicken = this.deleteChicken.bind(this)

    this.state = {chicken: []}
  }
  componentDidMount(){
    axios.get('http://localhost:5000/chicken')
    .then(response => {
      this.setState({chicken: response.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }
  deleteChicken(id){
    axios.delete('http://localhost:5000/chicken'+id)
    .then(res => console.log(res.data))
    this.setState({
      chicken: this.state.chicken.filter(el => el._id !== id)
    })
  }

  chickenList(){
    return this.state.chicken.map(currentchick => {
      return (
        <Chicken chicken={currentchick} deleteChicken={this.deleteChicken} key={currentchick._id} />
      )
    })
  }
  render() {
    return (
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
        <tbody>
            {this.chickenList()}
        </tbody>
    </table>
</div>

     </div>
    );
  }
}