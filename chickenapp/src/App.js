import "./App.css";
import { Route, Routes } from "react-router-dom";
import { EditChicken } from "./components/Chicken";
import { Homepage } from "./views/Homepage";
import { Chicken } from "./views/Chicken";
import { Scan } from "./views/Scan";
import { Sidebar } from "./components/Sidebar";
import { CreateChicken } from "./components/Chicken";
import { CreateUser } from "./components/User";
function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/chicken" element={<Chicken />}></Route>
        <Route exact path="/chicken/create" element={<CreateChicken />}></Route>
        <Route path="/chicken/update/:id" element={<EditChicken />}></Route>
        <Route path="/user" element={<CreateUser />}></Route>
        <Route path="/scan" element={<Scan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
