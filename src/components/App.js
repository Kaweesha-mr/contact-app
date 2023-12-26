import React,{useState,useEffect} from "react";
import { v4 as uuid } from "uuid";
import './App.css'
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import Header from "./Header"
import ContactList from "./ContactList"
import AddContact from "./AddContact"


function App() {
    const LOCAL_STORAGE_KEY = "contacts"
    const [contacts,setContacts] = useState([])

    const addContactHandler = (contact) => {
        console.log(contact)
        setContacts([...contacts,{id: uuid(), ...contact}]);
    }

    const removeContactHandler = (id) => {
        const newContactsList = contacts.filter((contact) => {
            return contact.id !== id;
        })

        setContacts(newContactsList);

    }

    useEffect(()=> {
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
    },[contacts])

    useEffect(()=> {
       const retriveContacts =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(!retriveContacts) setContacts(retriveContacts)
    },[contacts])

  return (
    <div className="ui container">

        <Routes>

            <Header />

            <Route path="/add" component={AddContact}/>
            <Route path="/" component={ContactList}/>
        </Routes>


    </div>
  );
}

export default App;
