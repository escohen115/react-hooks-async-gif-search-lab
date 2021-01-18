import React from 'react'

export default function GifSearch({searchParams, setSearchParams}){

    return (
    <form>
      <input type="text" 
      onChange={(event) => setSearchParams(event.target.value)}
      value={searchParams}/>
      <button type="submit">Submit</button>
    </form>
  );
}
