import './App.css'

export default function Leftbar(){
    return (
        <div className="leftbar">
            Leftbar
            Profile:
            <img className="leftbar-img" src="logo512.png" alt="leftbar-img"/>
            <div className="leftbar-list">
                <ul>
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