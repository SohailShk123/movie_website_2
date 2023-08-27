import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Data } from '../redux/dataFetch'
import { MovieCard } from '../components'

const Hero = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.AsyncFetchData)
    const singleResult = useSelector(state => state.AsyncFetchData.search)

    

    useEffect(() => {
        dispatch(Data())
    }, [dispatch,singleResult])
    return (
        <div className='mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5  p-3'>
            {(singleResult?.data?.results.length > 0 ) ? (
                singleResult.data?.results?.map(item => <MovieCard key={item.id} {...item} />)
            ) : (
                state?.data?.data && state?.data?.data?.results?.map(item => <MovieCard key={item.id} {...item} />))}
        </div>
    )
}

export default Hero