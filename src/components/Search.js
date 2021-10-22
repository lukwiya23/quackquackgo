import React,{useState, useEffect} from 'react'
import { useDebounce } from 'use-debounce'
import { useResultContext } from '../contexts/ResultsContextProvider'

import Links from './Links'

const Search = () => {
    const [text, setText] = useState('')
    const {setSearchTerm} = useResultContext()
    const [debounceValue] = useDebounce(text, 300)

    useEffect(()=>{
        if(debounceValue) setSearchTerm(debounceValue)
    }, [debounceValue])

    return (
        <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
            <input type="text" value={text} className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg" placeholder="Search" onChange={(e)=>setText(e.target.value)}/>
            <Links/>
        </div>
    )
}

export default Search
