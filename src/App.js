import { Component } from "react";
import styles from "./app.module.css";
import { v4 as uuidv4 } from "uuid";
import Contacts from "./components/Contacts";
import Form from "./components/Form";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    contacts.find((contact) => contact.name === name)
      ? alert(`${name} is already exist!! Try one more time, please!`)
      : contacts.find((contact) => contact.number === number)
      ? alert(`${number} is already exist!! Try one more time, please!`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  filteredContacts() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  onFilterHandleChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const visibleContacts = this.filteredContacts();
    const { filter } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>

        <Form addContact={this.addContact} />

        <h2 className={styles.title}>Contacts</h2>

        <Filter
          filter={filter}
          onFilterHandleChange={this.onFilterHandleChange}
        />

        <Contacts
          contact={visibleContacts}
          ondeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
