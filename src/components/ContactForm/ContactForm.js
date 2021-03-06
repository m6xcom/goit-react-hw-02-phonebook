import React, { Component } from "react";
import shortid from "shortid";
import style from "./ContactForm.module.css";

class ContactForm extends Component {
  render() {
    let { name, addContact } = this.props;
    const nameInput = shortid.generate();
    return (
      <form
        className={style.form}
        onSubmit={(e) => {
          e.preventDefault();
          addContact(name);
        }}
      >
        <label htmlFor={nameInput}>Name</label>
        <input
          onChange={(e) => {
            name = e.target.value;
          }}
          id={nameInput}
          name="name"
          type="text"
        ></input>
        <button className={style.addContactBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
