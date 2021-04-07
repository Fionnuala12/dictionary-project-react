import React from "react"; 
import './Phonetics.css';

export default function Phonetics(props){
    return (
        <div className="Phonetics"> 
        <a href = {props.phonetic.audio} rel="noreferrer" target="_blank"> 
        <i className="fas fa-volume-up"></i>
        </a>{" "}
        <span className="text">
        {props.phonetic.text}
        </span>
        </div>
    );
}