import React from 'react';
import axios from 'axios';

import Container from 'components/Container';
import Input from 'components/Input';
import FormText from 'components/FormText';
import Label from 'components/Label';
import Button from 'components/Button';
import Modal from 'components/Modal';

import {sharedStyles} from 'theme';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      isModalShown: false,
      modalTitle: '',
      modalMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  toggleModal() {
    this.setState({
      isModalShown: !this.state.isModalShown,
    });
  }

  resetForm() {
    this.setState(this.baseState);
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

    const formspreeEmail = 'sven.stanko5150@gmail.com';
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
            modalTitle: `Thanks ${data.name}!`,
            modalMessage: 'Your message was successfully sent. We\'ll get back to you soon.',
            name: '',
            email: '',
            message: '',
            disabled: false,
            isModalShown: true,
          });
        }
      })
      .catch(function(error) {
        self.setState({
          modalTitle: 'Aww snap!',
          modalMessage: `Seems like something went wrong. Please try again. Error message: ${error}`,
          disabled: false,
          isModalShown: true,
        });
      });
  }

  render() {
    return (
      <div>
        <div css={sharedStyles.hero}>
          <h1>Booking &amp; Enquiries</h1>
        </div>
        <Container>
          <div
            css={sharedStyles.content}>
            <p style={{textAlign: 'left'}}>
                Reach out to us for any enquiries! You can use the contact form
                below or email us directly:{' '}
              <a href="mailto:sven.stanko5150@gmail.com" css={sharedStyles.link}>
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
              <Button disabled={this.state.disabled} type="submit" value="Send">
                {this.state.disabled ? 'Sending...' : 'Send'}
              </Button>
            </form>
            <Modal title={this.state.modalTitle} isShown={this.state.isModalShown} onClick={this.toggleModal}>
              {this.state.modalMessage}
            </Modal>
          </div>
        </Container>
      </div>
    );
  }
}

export default Contact;