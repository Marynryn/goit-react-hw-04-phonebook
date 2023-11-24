import React from 'react';
import { nanoid } from 'nanoid';
import css from '../Form/Form.module.css';

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();
  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <div>
        <div className="form">
          <form className={css.form_phonebook} onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameId} className={css.label}>
              <h2 className={css.form_name}>Name</h2>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleNameChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                id={this.nameId}
              />
            </label>
            <label htmlFor={this.numberId} className={css.label_number}>
              <h2 className={css.form_number}>Number</h2>
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={this.state.number}
                onChange={this.handleNumberChange}
                id={this.numberId}
                required
              />
            </label>
            <button className="button_submit" type="submit">
              Add contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
