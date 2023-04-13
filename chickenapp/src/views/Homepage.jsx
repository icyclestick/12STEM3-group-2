import chicken from '../images/pexels-brett-jordan-840111.jpg'
import '../App.css'
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google'
import { createOrGetUser } from '..'
import useAuthStore from '../store/authStore.ts'
import { Link } from 'react-router-dom'

export const Homepage = () => {

    const { userProfile, addUser, removeUser } = useAuthStore()

    return <> <main className="home">
        <section className="title-container">
            <h1 className="home-title">
                DIET COCK 🐔
            </h1>
            <GoogleOAuthProvider clientId="840245322205-buhcfk413nemkh3p577mvas6vjanllbr.apps.googleusercontent.com">
                <div>
                    {userProfile ? (
                        <div>{userProfile.userName}
                            {userProfile.image && (
                                <Link href="/">
                                    <>
                                        <img src={userProfile.image} alt="" />
                                    </>
                                </Link>
                            )}
                            <button type='button'
                                onClick={() => {
                                    googleLogout();
                                    removeUser();
                                }}
                                class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Log Out
                            </button>
                        </div>
                    ) :
                        <GoogleLogin
                            onSuccess={(response) => createOrGetUser(response, addUser)}
                            onError={(error) => console.log(error)}
                        />}
                </div>
            </GoogleOAuthProvider>
        </section>
        <div className="img-container">
            <img src={chicken} alt="chicken" className="chicken-img" />
        </div>
    </main></>
}