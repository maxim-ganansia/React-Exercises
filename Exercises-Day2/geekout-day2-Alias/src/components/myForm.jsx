import React from 'react';
import MessageList from './ListOfMessages'

class MyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { input: "", list: [] }
    }

    saveInput(event) { this.setState({ input: event }) }
    showInput() {
        console.log(this.state.input);

        this.props.children.type.push(this.state.input)
        console.log(this.props.children.type);

        this.setState({ list: <MessageList list={this.props.children.type}></MessageList> })
    }

    render() {
        return (
            <div className="User-message">
                <input className="input-message" onChange={event => { this.saveInput(event.target.value) }} type="text" />
                <button className="button-send" onClick={() => { this.showInput() }}>Send</button>
                {this.state.list}
            </div>
        )
    }
}

export default MyForm