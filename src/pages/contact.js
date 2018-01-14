import React from 'react';
import axios from 'axios';

import Container from 'components/Container';
import Input from 'components/Input';
import FormText from 'components/FormText';
import Label from 'components/Label';
import Button from 'components/Button';

import {sharedStyles} from 'theme';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
      disabled: false,
    });
  }

  handleSubmit(e, state) {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      this.setState({invalid: true});
      return;
    }

    this.setState({
      disabled: true,
    });

    const formspreeEmail = 'jan.czizikow@gmail.com';
    const postURL = `//formspree.io/${formspreeEmail}`;
    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    const self = this;

    axios
      .post(postURL, {
        name: data.name,
        email: data.email,
        message: data.message,
      })
      .then(function(response) {
        if (response.status === 200) {
          self.setState({
            name: '',
            email: '',
            message: '',
            disabled: false,
          });
          alert(`Thanks ${data.name}! We'll get back to you soon.`);
        }
        self.setState({
          disabled: false,
        });
      })
      .catch(function(error) {});
  }

  render() {
    return (
      <div>
        <div css={sharedStyles.hero}>
          <h1>Booking &amp; Enquiries</h1>
        </div>
        <Container>
          <div
            css={{
              padding: '2.5em 0',
              maxWidth: '52.5rem',
              margin: '0 auto',
            }}>
            <p style={{textAlign: 'left'}}>
              Reach out to us for any enquiries! You can use the contact form
              below or email us directly:{' '}
              <a
                css={{

                }}
                href="mailto:sven.stanko5150@gmail.com">
                sven.stanko5150@gmail.com
              </a>
            </p>
            <form onSubmit={this.handleSubmit} noValidate>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                autoComplete="name"
                required
              />

              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                autoComplete="email"
                required
              />

              <Label htmlFor="message">Message</Label>
              <FormText
                name="message"
                type="text"
                rows={6}
                value={this.state.message}
                onChange={this.handleChange}
                autoComplete="message"
                required
              />
              <Input type="hidden" name="_format" value="plain" />
              <Button disabled={this.state.disabled} type="submit">
                Send
              </Button>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default Contact;
