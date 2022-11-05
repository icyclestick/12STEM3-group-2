import './App.css';
import Main from './Main'
import Sidebar from './Sidebar'
import Leftbar from './Leftbar';

function App() {
  return (
    <><Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <div className="App" id='outer-container'>
      <Main className="main-main" />
      <Leftbar />
    </div></>
  );
}

export default App;
