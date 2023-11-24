import Contact from 'components/Contact/Contact';

const ListContacts = props => {
  return (
    <div className="contacts">
      <Contact props={props.myContacts} onDelete={props.onDelete} />
    </div>
  );
};
export default ListContacts;
