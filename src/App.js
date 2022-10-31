import './App.css';
import Main from './Main'
import Sidebar from './Sidebar'
import Leftbar from './Leftbar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main className="main-main"/>
      <Leftbar /> 
    </div>
  );
}

export default App;
