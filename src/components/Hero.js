import { ArrowDownIcon } from '@heroicons/react/24/solid'
import discordServer from '../asserts/images/discordServer.png'
import DiscordImage from '../asserts/images/DiscordImage.png'
import React from 'react'

function Hero  () {
  return (
    <div className='bg-discord_blue pb-8 md:pb-0'>
    <div className='p-7 py-9 min-h-screen  md:h-83vh md:flex relative'>
      <div className='flex flex-col gap-7 md:max-w-md lg:max-none lg:justify-center'>
        <h1 className="text-5xl text-white font-bold">Your place to talk</h1>
        <h2 className="text-white text-lg font-light tracking-wide lg:max-w-3xl w-full">
          Whether you’re part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, Discord makes it easy to talk every day and hang out more often.
        </h2>
        <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6'>
          <button className='bg-white w-auto font-medium flex items-center justify-center rounded-full p-4 text-lg text-center hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition duration-200 ease-in-out'>
            <ArrowDownIcon className='w-6 mr-2' />
            Download for Mac
          </button>
          <button className='bg-gray-900 text-white w-auto font-medium flex items-center justify-center rounded-full p-4 text-lg text-center hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out'>
            Open Discord in your browser
          </button>
        </div>
      </div>
      <div className='flex-grow relative'>
        <img src={DiscordImage} alt='' className='absolute mt-16 md:hidden' />
        <img src={discordServer} alt='' className='hidden md:inline absolute' />
      </div>
    </div>
  </div>
  )
}

export default Hero