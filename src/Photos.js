import React from 'react'; 

export default function Photos(props){
    if(props.photos){
        return (
            <section className="Photos"> 
            {props.photos.map(function (photo, index) {
                return <img src={photo.src.landscape} key={index} alt="searchedWord"/>    
            })}
            </section>
        )
    } else {
        return null;
    }
}