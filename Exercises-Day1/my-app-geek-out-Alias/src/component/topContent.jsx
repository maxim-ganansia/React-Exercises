import React from "react"

class MyTopContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="BoxContent">{this.props.children}
                <div className="first-content">
                    <img className="Sun-image" src={this.props.image}/>
                </div>
                <div className="second-content">
                    <p className="Country">Serbia</p>
                    <h2 className="City">Belgrade</h2>
                    <p className="Temperature">Sunny 19°C</p>
                </div>
            </div>
        )
    }
};

export default MyTopContent

