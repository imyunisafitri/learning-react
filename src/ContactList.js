import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      {props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHander={deleteConactHandler} key={contact.id} />;
      })}
    </div>
  );
};

export default ContactList;
