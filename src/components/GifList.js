import React from 'react'

export default function GifList ({searchResults}){

    console.log(searchResults.data)

    let resultsMapped = searchResults.data.map((result)=>{
        return(
        <li>
            <img src={result.images.original.url}></img>
        </li>)
    })

    return (
        <ul>
            {/* {resultsMapped} */}
        </ul>
   
    )
}