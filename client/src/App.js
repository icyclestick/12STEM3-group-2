import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import HomePage from './components/homepage.component'
import ChickenList from './components/chicken-list.component'
import EditChicken from './components/edit-chicken.component'
import CreateChicken from './components/create-chicken.component'
import CreateUser from './components/create-user.component'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="App" id='outer-container'>
      <Router>
            <Sidebar />
            <Routes>
                <Route path="/" exact element={<HomePage/>}></Route>
                <Route path="/get" element={<ChickenList />}></Route>
                <Route path="/edit/:id" element={<EditChicken />}></Route>
                <Route path="/create" element={<CreateChicken />}></Route>
                <Route path="/user" element={<CreateUser />}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
