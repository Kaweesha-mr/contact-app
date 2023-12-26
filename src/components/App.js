import React from "react";
import './App.css'
import Header from "./Header"
import ContactList from "./ContactList"
import AddContact from "./AddContact"

function App() {

    const contacts = [
        {
            id:    "1",
            name:  "kaweesha",
            email: "kaweesha.mrgmail.com"
        },

        {
            id:    "2",
            name:  "Dipesh",
            email: "dipesh.mrgmail.com"
        },

        {
            id:    "3",
            name:  "sodawathi",
            email: "sodawathi.mrgmail.com"
        }

    ]

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
