import React from "react"

class MyFormContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="BoxContent">{this.props.children}
                <div className="Content1">
                    <h1 className="ContentTitle">{this.props.title}</h1>
                    <p className="ContentText">Our vision is simple. We want to create websites and applications with both <br />high quality design and easy-to-access content. The finished product will be <br />totally unique and represent awesomeness.</p>
                </div>
            </div>
        )
    }
};

export default MyFormContent

