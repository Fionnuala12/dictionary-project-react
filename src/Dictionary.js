import React, { useState } from "react"; 
import Results from './Results';
import axios from "axios";
import './Dictionary.css';

export default function Dictionary(){
let [keyword, setKeyword]= useState("");
let [results, setResults]= useState(null);

function search (event){
    event.preventDefault(); 

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}

function handleResponse (response){
    setResults(response.data[0]);
}

function handleKeywordChange(event){
    setKeyword(event.target.value);
}

    return(
        <div className="Dictionary"> 
        <form onSubmit={search}> 
            <input type="search" placeholder="type word here..." className="search-bar" onChange={handleKeywordChange}/>
            <input type="submit" className="btn btn-primary" />
            <Results results={results}/>
        </form>
        </div>
    )
}