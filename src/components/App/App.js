import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactsList from "../ContactsList/ContactsList";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  addContact = (changedName) => {
    let { contacts, name } = this.state;
    name = changedName;
    if (!contacts.includes(name)) {
      contacts.push(changedName);
      this.setState({
        contacts: contacts,
      });
    } else {
      console.log("exists");
    }
  };
  render() {
    const { contacts, name } = this.state;
    return (
      <div className="wrapper">
        <h2>Phonebook</h2>
        <ContactForm name={name} addContact={this.addContact} />
        <h2 className="contactsTitle">Contacts</h2>
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}

export default App;
