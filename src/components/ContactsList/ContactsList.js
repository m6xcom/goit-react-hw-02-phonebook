import React, { Component } from "react";
import shortid from "shortid";
import style from "./ContactsList.module.css";

class ContactsList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map((el) => {
          return <li key={shortid.generate()}>{el}</li>;
        })}
      </ul>
    );
  }
}

export default ContactsList;
