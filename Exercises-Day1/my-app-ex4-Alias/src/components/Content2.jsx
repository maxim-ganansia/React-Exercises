import React from "react"

class MyFormContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="BoxContent">{this.props.children}
                <div className="Content2">
                    <img className="image" src={this.props.image}/>
                    <h3 className="subtitle">{this.props.subtitle}</h3>
                    <p className="informations">{this.props.info}</p>
                </div>
            </div>
        )
    }
};

export default MyFormContent
