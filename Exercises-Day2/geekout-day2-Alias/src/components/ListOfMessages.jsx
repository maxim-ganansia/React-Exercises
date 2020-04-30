import React from 'react';

class MessageList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="ListMessage">
                <ul className="ShowList">
                    {this.props.list.map(el =>
                        <li className="listElement" key={el.id}>
                            <div>{el}</div>
                        </li>)}
                </ul>
            </div>
        )

    }
}

export default MessageList