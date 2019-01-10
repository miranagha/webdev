import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      email: "",
      pickUp: "",
      delivery: "",
      items: ""
    };
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    fetch(`/send-email`, {
      method: "POST",
      body: JSON.stringify(this.state),
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  )
  .then(res => {
        this.setState({
            submitted: true,
            name: "",
            phone: "",
            email: "",
            pickUp: "",
            delivery: "",
          items: ""
        });
      })
      .catch(err => console.log(err));
    };

  render() {
    return (
      <form className="contact-form">
        <fieldset>
          <legend>Contact us</legend>
          <label>Name*</label>
          <br />
          <input
            name="name"
            value={this.state.name}
            onChange={e => this.change(e)}
          />
          <br />
          <label>Phone Number*</label>
          <br />
          <input
            name="phone"
            value={this.state.phone}
            onChange={e => this.change(e)}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            name="email"
            value={this.state.email}
            onChange={e => this.change(e)}
          />
          <br />
          
          <br />
          <label>Message</label>
          <br />
          <textarea
            placeholder='Please tell us your enquiry'
            cols="27"
            rows="4"
            name="items"
            type="textarea"
            value={this.state.items}
            onChange={e => this.change(e)}
          />
          <br />
          {this.state.submitted ? (
            <p className='thankYou'>
              THANK YOU! We will get back to you within few minutes.
            </p>
          ) : null}

          <button
            type="submit"
            className="btn btn-block btn-l"
            onClick={e => this.onSubmit(e)}
          >
            Send
          </button>
        </fieldset>
      </form>
    );
  }
}
