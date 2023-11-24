const Filter = props => {
  return (
    <div>
      <h3 style={{ fontSize: 30 }}>Find contacts by name</h3>
      <input
        type="text"
        name="name"
        value={props.filter}
        onChange={props.onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};
export default Filter;
