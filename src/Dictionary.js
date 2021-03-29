import React, { useState } from "react"; 
import axios from "axios";
import './Dictionary.css';

export default function Dictionary(){
let [keyword, setKeyword]= useState("");

function search (event){
    event.preventDefault(); 
    alert(`Searching for ${keyword} definition`); 

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}

function handleResponse (response){
    console.log(response.data[0]);
}

function handleKeywordChange(event){
    setKeyword(event.target.value);
}

    return(
        <div className="Dictionary"> 
        <form onSubmit={search}> 
            <input type="search" placeholder="type word here..." className="search-bar" onChange={handleKeywordChange}/>
            <input type="submit" className="btn btn-primary" />
        </form>
        </div>
    )
}