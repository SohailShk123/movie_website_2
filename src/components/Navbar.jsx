import React, { useEffect, useState } from 'react'
import { HomeIcon ,MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { fetchOne } from '../redux/dataFetch'

const Navbar = () => {
    const [input , setInput] = useState('')
    const dispatch = useDispatch()
    

   
useEffect(()=>{
    dispatch(fetchOne(input))
},[input])

    return (
        <div className='p-3 flex justify-around md:justify-between items-center bg-red-100 shadow-md sticky top-0' >

            <div className='relative'>
                <input type="text" name='text' placeholder='Search'
                    className='bg-gray-100 w-[60vw] rounded-md border-none outline-none p-2 pl-12 shadow-md '
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                />
                <MagnifyingGlassIcon className="h-6 w-6 absolute top-2 text-gray-400 left-3" />
            </div>
            <div>
                <HomeIcon className="h-6 w-6" />
            </div>
        </div>
    )
}

export default Navbar