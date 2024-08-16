import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import  ServerIcon  from './SeverIcon'
import { auth } from '../firebase'
import { Navigate } from 'react-router-dom'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/24/solid'

function Home() {

    const [user] = useAuthState(auth);
  return<>
  {!user &&  <Navigate to="/" />}
  <div className='flex h-screen'>
    <div className='flex flex-col space-y-3 bg-discord_serversBg p-3 min-w-max'>
        <div className='server-default hover:bg-discord_purple'>
        <img src="https://rb.gy/kuaslg" alt="" className="h-5" />
        </div>
        <hr className='border-gray-700 border w-8 mx-auto' />
         <ServerIcon image="https://rb.gy/qidcpp" />
          <ServerIcon image="https://rb.gy/zxo0lz" />
          <ServerIcon image="https://rb.gy/qidcpp" />
          <ServerIcon image="https://rb.gy/zxo0lz" />


          <div className='server-default hover:bg-discord_green group'>
            <PlusIcon className='text-discord_green h-7
             group-hover:text-white' />
          </div>
    </div>


    <div className='bg-discord_serverBg flex flex-col min-w-max'>
        <h2 className='flex text-white font-bold text-sm items-center
        justify-between border-b border-gray-800 p-4
        hover:bg-gray-700 cursor-pointer'>Offical Discord Server...<ChevronDownIcon className='h-5 ml-2' /> 
        </h2>

        <div className='text-gray-400 flex-grow overflow-scroll scrollbar-hide'>
        <div className='flex items-center p-2 mb-2'>
        <ChevronDownIcon className='h-3 mr-2' />
        <h4 className='font-semibold'>Channels</h4>
        <PlusIcon className=' h-6 ml-auto cursor-pointer hover:text-white' />
        </div>
        
    </div>

    </div>
   
  </div>
  </>
}

export default Home