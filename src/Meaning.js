import React from "react"; 
import Synonyms from './Synonyms';
import './Meanings.css';

export default function Meaning(props){
    return(
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <ol>
            {props.meaning.definitions.map(function(definition, index){
                return (
                    <div key={index}> 
                    <li>{definition.definition}
                    <br /> 
                    <div className="example">"{definition.example}"</div>
                    <Synonyms synonyms={definition.synonyms} />
                    </li>
                    </div>    
                )
            })}
            </ol>
        </div>
    )}