import axios from 'axios';
 
 class UserService {
 
 deleteUser(id) {
 axios.get('http://localhost:4000/api/remove/' + id)
 .then(() => {
 console.log('Data Deleted !!!')
 })
 .catch((error) => {
 console.log(error)
 })
 }
 }
 
 export default UserService;