import React, {createContext, useContext, useState} from 'react'

const ResultContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

const ResultsContextProvider = ({children}) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    // /videos /images /news
    const getResults = async(type)=>{
        setIsLoading(true)

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers:{
                'x-user-agent': 'desktop',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.rapidApiKey
            }
            
        });

        const data = await response.json()

        if(type.includes('/images')){
            setResults(data.image_results)
        }
        else if(type.includes('/news')){
            setResults(data.news)
        }
        else{
            setResults(data.results)
        }
        setIsLoading(false)
    }


    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export default ResultsContextProvider
export  const useResultContext = () => useContext(ResultContext) 