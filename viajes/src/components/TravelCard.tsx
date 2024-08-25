import { ITravel } from '@/types'
import React from 'react'

interface TravelCardProps {
    travel: ITravel
}

const TravelCard: React.FC<TravelCardProps> = ({ travel }) => {
  return (
    <div className='bg-gray-400 rounded-lg p-10 w-[40%] m-10'>
        <div>
            <h2>{travel.title}</h2>
        </div>     
    </div>
  )
}

export default TravelCard