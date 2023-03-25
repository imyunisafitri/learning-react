const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="card" key={id}>
      <div className="contact-card">
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
      <div className="delete">
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ContactCard;
