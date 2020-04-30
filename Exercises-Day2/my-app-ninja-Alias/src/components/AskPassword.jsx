import React from 'react';


class AskPassword extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="inputs">
                <input type="text" className="Input-case"/>
                <input type="text" className="Input-case"/>
                <input type="text" className="Input-case"/>
                <input type="text" className="Input-case"/>
            </div>
        )
    }
}

export default AskPassword