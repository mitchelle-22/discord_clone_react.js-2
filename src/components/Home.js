import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ServerIcon } from '@heroicons/react/24/solid'
import { auth } from '../firebase'
import { Navigate } from 'react-router-dom'

function Home() {

    const [user] = useAuthState(auth);
  return<>
  {!user &&  <Navigate to="/" />}
  <div>
    <div>
        <div>
        <img src="https://rb.gy/kuaslg" alt="" className="h-5" />
        </div>
        <hr className='border-gray-700 border w-8 mx-auto' />
         <ServerIcon image="https://rb.gy/qidcpp" />
          <ServerIcon image="https://rb.gy/zxo0lz" />
          <ServerIcon image="https://rb.gy/qidcpp" />
          <ServerIcon image="https://rb.gy/zxo0lz" />
    </div>
  </div>
  </>
}

export default Home