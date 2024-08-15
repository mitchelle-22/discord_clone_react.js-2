import React from 'react';
import { Bars4Icon } from "@heroicons/react/24/solid";
import DiscordLogo from '../asserts/images/DiscordLogo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";  // Import it directly here

function Header() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();

        signInWithPopup(auth, provider)
        .then(() => navigate("/channels"))
        .catch((error) => alert(error.message));
    };

    return (
        <header className='flex items-center justify-between py-4 px-6 bg-discord_blue'>
            <a href='/'>
                <img src={DiscordLogo} alt='' className='w-32 h-12 object-contain' />
            </a>
            
            <div className='hidden lg:flex space-x-6 text-white'>
                <a className='link'>Download</a>
                <a className='link'>Why Discord</a>
                <a className='link'>Nitro</a>
                <a className='link'>Safety</a>
                <a className='link'>Support</a>
            </div>

            <div className='flex space-x-4'>
                <button
                    className='bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ese-in-out whitespace-nowrap font-medium'
                    onClick={!user ? signIn : () => navigate("/channels")}
                >
                    {!user ? "Login" : "Open Discord"}
                </button>
                <Bars4Icon className='h-9 text-white cursor-pointer lg:hidden' />
            </div>
        </header>
    );
}

export default Header;