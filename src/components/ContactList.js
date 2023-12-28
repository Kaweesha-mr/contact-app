import React from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";


const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }

    const contacts = [
        {
        id: "1",
        name: "Dipesh",
        email: "cs@email.com"
        }

    ]
    const renderContactList = contacts.map((contact) => {
        return(
            <ContactCard contacts={contact} clickHandler={deleteContactHandler} key={ contact.id}/>
        )
    })


    return (
        <div className="main">
            <h2>
                Contact List
                <Link to="/add">

                    <button className="ui button blue right"> ADD contact</button>
                </Link>

            </h2>

            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>


    )
}

export default ContactList;