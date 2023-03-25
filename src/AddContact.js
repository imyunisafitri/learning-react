import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("All the field are mendotary!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="add-contact">
        <h2>Add Contact</h2>
        <form onSubmit={this.add}>
          <label>Name</label>
          <br />
          <input type="text" required onChange={(e) => this.setState({ name: e.target.value })} />
          <br />
          <label>Email</label>
          <br />
          <input type="email" required onChange={(e) => this.setState({ email: e.target.value })} />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
