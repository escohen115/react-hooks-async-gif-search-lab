import React, {useState, useEffect} from 'react'
import GifSearch from './GifSearch'
import GifList from './GifList'

export default function GifListContainer(){

    const [searchParams, setSearchParams] = useState('')
    const [searchResults, setSearchResults] = useState([0])

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchParams}&api_key=jaMJ2i7Kxf5la49pC5gHFkFFziAkxjnB`)
        .then(response => response.json())
        .then(data => setSearchResults(data))        
    }, [searchParams])

    

    return(
        <div>
            <GifSearch
            searchParams = {searchParams}
            setSearchParams={setSearchParams}
            />
            <GifList
            searchResults={searchResults}
            />
        </div>
    )
}


