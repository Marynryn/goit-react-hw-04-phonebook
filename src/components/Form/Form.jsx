import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from '../Form/Form.module.css';

export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameId = nanoid();
  const numberId = nanoid();
  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleNumberChange = event => {
    setNumber(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();


    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setNumber("");
    setName("")
  };

  return (
    <div>
      <div className="form">
        <form className={css.form_phonebook} onSubmit={handleSubmit}>
          <label htmlFor={nameId} className={css.label}>
            <h2 className={css.form_name}>Name</h2>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={nameId}
            />
          </label>
          <label htmlFor={numberId} className={css.label_number}>
            <h2 className={css.form_number}>Number</h2>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={handleNumberChange}
              id={numberId}
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



