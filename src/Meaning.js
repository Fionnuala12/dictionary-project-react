import React from "react"; 

export default function Meaning(props){
    return(
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>

            {props.meaning.definitions.map(function(defintion, index){
                return (
                    <div key={index}> 
                    <p>{defintion.definition}
                    <br /> 
                    <em>{defintion.example}</em></p>
                    </div>
                )
            })}
        </div>
    )}