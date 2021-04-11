import React, { useState } from "react";
import axios from "axios"; 
import Loader from "react-loader-spinner";
import Results from './Results';
import Photos from './Photos';
import './Dictionary.css';

export default function Dictionary(props){
let [keyword, setKeyword]= useState(props.defaultKeyword);
let [results, setResults]= useState(null);
let [photos, setPhotos] = useState(null);
let [loaded, setLoaded]= useState(false); 



function handleDictionaryResponse (response){
    setResults(response.data[0]);
}

function handleKeywordChange(event){
    setKeyword(event.target.value);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function handlePexelResponse(response){
    setPhotos(response.data.photos);
}

function load(){
    setLoaded(true); 
    search()
}

function search (){ 
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelApiKey = "563492ad6f91700001000001bcb21aadf95a4c2fa47af05c2bb6bd20";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelApiKey}`};
    axios.get(pexelApiUrl, {headers: headers}).then(handlePexelResponse);
}

if(loaded){
    return(
        <div className="Dictionary"> 
        <section>
        <h2>What would you like to look up? </h2>
        <form onSubmit={handleSubmit}> 
            <input type="search" placeholder="type word here..." className="search-bar" defaultValue={props.defaultKeyword} onChange={handleKeywordChange} />
        </form>
        </section>
        <Results results={results}/>
        <Photos photos={photos} />
        </div>
    )
} else {
    load()
    return (
        <div className="loader">
        <Loader
          type="Watch"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} 
          style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          />
          </div>
    ) 
}    
}