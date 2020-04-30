import React from 'react'

function TravelDestination(props){
    return(
        <div>
            <img className="App-image" src={props.image} alt={props.name}/>
            <p>{props.name}</p>
            <a href={props.link}>Click here to see this place</a>
        </div>
    );
}

export default TravelDestination
