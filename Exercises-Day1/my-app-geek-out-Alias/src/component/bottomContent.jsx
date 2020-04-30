import React from "react"

class MyFormContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="BoxContent2">{this.props.children}
                <div className="Dates">
                    <p>{this.props.day}</p>
                    <p>{this.props.date}</p>
                </div>
                <div className="Logo">
                    <img className = "logoTemp" src={this.props.logo}></img>
                </div>
                <div className="day-infos">
                    <div className="status">
                        <h2>{this.props.status}</h2>
                        <p>{this.props.temperature}</p>
                    </div>
                    <div className="otherInfos">
                        <div>
                            <img className="logo2" src={this.props.logo2}></img>
                            <span className="Text">{this.props.text2}</span>
                        </div>
                        <div>
                            <img className="logo2" src={this.props.logo3}></img>
                            <span className="Text">{this.props.text3}</span>
                        </div>
                        <div>
                            <img className="logo2" src={this.props.logo4}></img>
                            <span className="Text">{this.props.text4}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default MyFormContent
