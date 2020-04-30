import React from "react"
import listUser from "./listUser"

class ShowUsers extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <ul className="show-list">
            {listUser.map(el =>
            <li className="list" key={el.id}>
                <div>{el.first_name}</div>
                <div>{el.email}</div>
                <div>{el.country}</div>
            </li>)}
        </ul>)
    }
}

export default ShowUsers