import ContactCard from "./ContactCard";

const ContactList = (props) => {
  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      {props.contacts.map((contact) => {
        return <ContactCard contact={contact} />;
      })}
    </div>
  );
};

export default ContactList;
