import { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import Filter from './Filter/Filter';
import ListContacts from './ListContacts/ListContacts';
import { nanoid } from 'nanoid';


export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts") ?? [])
  });
  const [filter, setFilter] = useState("");


  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const handleSubmit = (name, number) => {

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const isContactExists = contacts.some(
      contact => contact.name === name
    );
    if (isContactExists) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts([...contacts, newContact]
      );
    }
  };

  const handleDelete = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId),
    );
  };
  const filterContacts = () => {
    const contactsToLower = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name && contact.name.toLowerCase().includes(contactsToLower)
    );
  };

  useEffect(() => {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts)
    }

  }, [])
  useEffect(() => {

    localStorage.setItem("contacts", JSON.stringify(contacts));

  }, [contacts])

  const visualContacts = filterContacts();
  return (
    <div
      style={{
        padding: 50,
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1 style={{ fontSize: 48 }}>Phonebook</h1>
      <Form onSubmit={handleSubmit} />

      <h2 style={{ fontSize: 46 }}>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ListContacts
        props={contacts}
        myContacts={visualContacts}
        onDelete={handleDelete}
      />
    </div>
  );
}

