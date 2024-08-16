import { HashtagIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Channel({id, channelName}) {
  const setChannel = () =>{};
  return (
    <div className='font-medium flex items-center cursor-pointer hover:bg-gray-800 p-1 rounded-md hover:text-white'>
      <HashtagIcon  className='h-5 mr-2' onClick={setChannel}/>{channelName}
    </div>
  )
}

export default Channel