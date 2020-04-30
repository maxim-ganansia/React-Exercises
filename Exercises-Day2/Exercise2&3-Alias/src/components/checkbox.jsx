import React from 'react'

class Checkbox extends React.Component{
    constructor(props){
        super(props)
        this.state = {checked : false}
    }

    saveCheckbox(event){
        this.setState({checked:event})
    }

    render(){
        return(
            <div>
                <input type="checkbox" onClick={(event) => {this.saveCheckbox(event.target.checked)}}></input>
                <label>Please check the checkbox</label>
                {this.state.checked && this.props.children}
            </div>
        )
    }
}

export default Checkbox