import Buttons from './components/Button'
import Forms from './components/Forms'
import './App.css'

export default function Main(){
    return (
        <div className='main'>
             <h1>Calorie Calculator</h1>
            <p>Lorem ipsum dolor sit amet</p>
        <main className='main-forms'>
            <Buttons />
            <Buttons />
            <Forms />
            <Forms />
            <Forms />
            <Forms />
        </main>
        </div>
    )
}