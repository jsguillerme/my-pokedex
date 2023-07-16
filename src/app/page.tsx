'use client'

import { CommandK } from '@/components/CommandK'

export default function Home() {
  return (
    <>
      <div className="w-full h-screen dark:bg-[#1D1D1D] grid place-items-center">
        <div className="max-w-[1120px] w-full flex flex-col items-center justify-center gap-6">
          <h1 className="bg-gradient-to-r from-amber-500 to-pink-500 text-5xl font-bold  text-transparent bg-clip-text text-center">
            Find your pokemon
          </h1>
          <p className="text-xl font-semibold dark:text-white text-center">
            Press{' '}
            <strong className="bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text text-center">
              &#8984; + K
            </strong>{' '}
            to search an pokémon
          </p>
        </div>
      </div>
      <CommandK />
    </>
  )
}
