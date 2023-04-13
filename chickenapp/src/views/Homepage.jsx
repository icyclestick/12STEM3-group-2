import chicken from '../images/pexels-brett-jordan-840111.jpg'
import '../App.css'
import { useEffect } from 'react'

export const Homepage = () => {

    const handleCallbackResponse = (response) => {
        console.log("Encoded JWF ID token: " + response.credential)
    }


    useEffect(() => {
        /*global google*/

        google.accounts.id.initialize({
            client_id: "840245322205-buhcfk413nemkh3p577mvas6vjanllbr.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )

    }, [])

    return <> <main className="home">
        <section className="title-container">
            <h1 className="home-title">
                DIET COCK 🐔
            </h1>
            <div id="signInDiv">
            </div>
        </section>
        <div className="img-container">
            <img src={chicken} alt="chicken" className="chicken-img" />
        </div>
    </main></>
}