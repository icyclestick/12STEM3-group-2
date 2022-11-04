import './App.css';
import Main from './Main'
import Sidebar from './Sidebar'
import Leftbar from './Leftbar';

function App() {
  return (
    <div className="App" id='outer-container'>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      <Main className="main-main"/>
      <Leftbar /> 
    </div>
  );
}

export default App;
