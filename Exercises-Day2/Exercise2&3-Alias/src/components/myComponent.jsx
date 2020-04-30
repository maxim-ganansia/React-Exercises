import React from 'react';

class Alert extends React.Component{
    constructor(props){
        super(props);
        this.state = {checked : false}
    }

    componentDidMount(){
        alert("I am Alive!");
    }

    render(){
        return(
            // <h1 className="title">The Maxou's page</h1>
            <h1 className="title">Congratulation you have checked the box</h1>
        )
    }
}

export default Alert
