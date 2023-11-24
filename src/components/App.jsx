import React from 'react';
import Form from '../components/Form/Form';
import Filter from './Filter/Filter';
import ListContacts from './ListContacts/ListContacts';
import { nanoid } from 'nanoid';


export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  handleSubmit = (name, number) => {
    const { contacts } = this.state;
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
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  filterContacts = () => {
    const contactsToLower = this.state.filter.toLowerCase();
    return this.state.contacts.filter(
      contact =>
        contact.name && contact.name.toLowerCase().includes(contactsToLower)
    );
  };
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if(parsedContacts){
    this.setState({ contacts: parsedContacts })
  }}
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const visualContacts = this.filterContacts();
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
        <Form onSubmit={this.handleSubmit} />

        <h2 style={{ fontSize: 46 }}>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ListContacts
          props={this.state}
          myContacts={visualContacts}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
