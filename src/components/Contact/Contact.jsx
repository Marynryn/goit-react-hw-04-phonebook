import css from '../Contact/Contact.module.css';

const Contact = props => {
  const formatNumber = number => {
    return number.replace(/(\d{3})(\d{2})(\d{2})/, `$1-$2-$3`);
  };
  return (
    <ul className={css.list}>
      {props.props.map((contact, id) => (
        <li key={id} className={css.contact}>
          {contact.name}: {formatNumber(contact.number)}{' '}
          <button
            type="button"
            className={css.button_delete}
            onClick={() => props.onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Contact;
