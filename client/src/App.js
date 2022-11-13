import './App.css';
import Main from './Main'
import Leftbar from './Leftbar';

function App() {

  return (
    <div className="App" id='outer-container'>
      <header className='grid-col-span-2 header'>
            <h1 className='main-title'>Calorie Calculator</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </header>
      <Main />
      <Leftbar />
    </div>
  );
}

export default App;
