import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EditChicken } from "./components/Chicken";
import { Homepage } from "./views/Homepage";
import { Chicken } from "./views/Chicken";
import { Sidebar } from "./components/Sidebar";
import { CreateChicken } from "./components/Chicken";
function App() {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/chicken" element={<Chicken />}></Route>
        <Route exact path="/chicken/create" element={<CreateChicken />}></Route>
        <Route exact path="/chicken/edit/:id" element={<EditChicken />}></Route>
        {/* <Route path="/user" element={<CreateUser />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
