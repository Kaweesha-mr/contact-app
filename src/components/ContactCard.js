import React from "react";
import user from "../images/user.jpeg"
import bin from "../images/img.png"

const CardContact = (props) => {
    const{id,name,email} = props.contacts;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
            <div className="content">
                <div className="header"> {name}</div>
                <div> {email}</div>
            </div>
            <img className="ui avatar image"  onClick={() => {props.clickHandler(id)}} src={bin} alt="user"/>
        </div>
    )

}

export default CardContact;