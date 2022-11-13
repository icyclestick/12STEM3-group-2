import Buttons from './components/Button'
import Forms from './components/Forms'
import './App.css'

export default function Main(){
    return (
    <main>
        <div className='main-forms grid-row-start-2'>
            <Buttons/>
            <Forms />
        </div>
    </main>
        
    )
}