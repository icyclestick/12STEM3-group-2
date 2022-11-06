import './App.css'

export default function Leftbar(){
    return (
        <div>
            <div className="leftbar">
                <header>
                    Profile:
                </header>
                <img className="leftbar-img" src="logo512.png" alt="leftbar-img"/>
                    <ul className='leftbar-list'>
                        <li>
                            Weight:
                        </li>
                        <li>
                            Height:
                        </li>
                        <li>
                            Status:
                        </li>
                    </ul>
            </div>
        </div>
        
    )
}