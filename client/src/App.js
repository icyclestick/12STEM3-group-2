import { useState , useEffect } from 'react';
import './App.css';
import Main from './Main'
import Leftbar from './Leftbar';

function App() {

  const [data, setData] = useState(null)

  useEffect(()=>{
    fetch('/api')
    .then((res) => res.json())
    .then((data) => setData(data.message))
  })

  return (
    <div className="App" id='outer-container'>
      <header className='grid-col-span-2 header'>
            <h1 className='main-title'>Calorie Calculator</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>{!data ? "loading..." : data}</p>
      </header>
      <Main />
      <Leftbar />
    </div>
  );
}

export default App;
