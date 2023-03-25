import React, { useState, useEffect } from "react";
// import {v4} from 'uuid';
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };
  console.log(contacts);
  useEffect(() => {
    const retiveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retiveContacts) setContacts(retiveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
