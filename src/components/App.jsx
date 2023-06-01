import { nanoid } from 'nanoid';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const newContact = {
      name: this.state.name,
      id: nanoid(),
    };
    this.setState(prevState => {
      return { contacts: [newContact, ...prevState.contacts], name: '' };
    });
  };

  // зміню state.filtre
  changeFilter = () => {};
  //
  getFilteredContacts = () => {};

  render() {
    //замість this.state.contacts row 55 в ul
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <section>
          <h2>Phonebook</h2>
          <form onSubmit={this.onSubmit}>
            <label>
              <input
                onChange={this.handleChange}
                value={this.state.name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </section>
        <section>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
