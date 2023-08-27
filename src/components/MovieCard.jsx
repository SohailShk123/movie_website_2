import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Rating} from '../components'

const MovieCard = ({ ...item }) => {
  const navigate = useNavigate()
  return (
    <div className='bg-gray-100 h-[320px] rounded-lg mx-auto '
    onClick={()=>navigate(`/details/${item.id}`)}
    >
      <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt={item.title} className='h-[80%] w-full rounded-t-lg object-cover' />
      <div className='flex justify-between items-center px-2 mt-2'>
        <h2 className='text-xs font-bold'>{item.title} </h2>
        <p className='text-xs font-semibold  rounded-full h-5 w-5 text-center'><Rating rating={item.vote_average}/></p>
      </div>
      <p className='text-xs line-clamp-2 md:line-clamp-1 px-2'>{item.overview}</p>
    </div>
  )
}

export default MovieCard