import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { HomeIcon,ArrowLeftIcon } from '@heroicons/react/24/solid'

const CardDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const fetchOne = async (id) => {
        const { data } = await axios(`/movie/${id}?api_key=`)
        console.log(data)
        setData(data)
    }
    useEffect(() => {
        fetchOne(id)
    }, [id])

    return (
        <div className='relative'>
            <nav className='p-5 shadow-lg w-full flex justify-between items-center'>
                <h3 className='ml-8'>Movies Details</h3>
                <div><HomeIcon 
                onClick={()=>navigate('/')}
                className='h-5 w-5' /></div>
            </nav>
            <div className="container mx-auto px-4 py-8" >

                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3 lg:mr-8">
                        <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt={data.title} className="rounded-lg shadow-lg" />
                    </div>
                    <div className="w-full lg:w-2/3 mt-4 ml-5 lg:mt-0">
                        <h1 className="text-3xl font-semibold mb-2">{data.title}</h1>
                        <div className="flex items-center mb-2">
                            <span className="mr-2 font-semibold">Rating:</span>
                            <span>{data.vote_average}</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="mr-2 font-semibold">Year:</span>
                            <span>{data.release_date}</span>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Cast</h2>
                            <ul className="list-disc ml-5">
                                {data.production_companies?.map((actor) => (
                                    <li key={actor.name} >
                                        <span className="text-lg font-semibold">{actor.name}</span>
                                        {"  ("}<span>{actor.origin_country}</span>{")"}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex mb-2">
                                <span className="mr-2 font-semibold">Description:</span>
                                <span>{data.overview}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div>
            <button
            onClick={() => window.history.back()}
            ><ArrowLeftIcon  className="h-6 w-6 absolute z-10 top-5 left-3"/></button>
            </div>
        </div>
    )
}

export default CardDetails
