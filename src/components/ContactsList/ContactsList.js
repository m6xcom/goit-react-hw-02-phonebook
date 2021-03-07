import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./ContactsList.module.css";

class ContactsList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ),
    deleteContact: PropTypes.func,
  };
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ul>
        {contacts.map((el) => {
          return (
            <li className={style.contactsListItem} key={el.id}>
              <p>
                {el.name} : {el.number}
              </p>
              <button onClick={deleteContact} data-id={el.id}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactsList;
