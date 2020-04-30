import React from 'react';
import ArrowLogo from '../images/Arrow-logo.png'


function MyFormContent(props){
    return(
        <div>
            <img src={ArrowLogo} className="ArrowLogo"></img>
            <div className="Content">
                <div className="title">{props.title}</div>
                <div className="subtitle">Interactively expedite revolutionary ROI after <br/>bricks-and-clicks alignments.</div>
                <div>{props.children}</div>
                <button className="Button-shop">{props.button}</button>
            </div>
        </div>
    )
}

export default MyFormContent






