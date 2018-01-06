import React from 'react';
import Link from 'gatsby-link';
import { css } from 'glamor';

import Container from 'components/Container';
import Overlay from 'components/Overlay';
import NavToggle from './NavToggle';
import NavClose from './NavClose';
import NavLink from './NavLink';
import Sidebar from './Sidebar';

import logo from '../../../static/logo.svg';
// import {colors} from 'theme.js'

const linkStyles = css({
  ':hover': {
    color: '#b64b4b',
  },
  ':active': {
    color: '#b64b4b',
  },
  // TODO
  // ':focus': {
  //   backgroundColor: '#353535',
  // },
  // '::after': {
  //   content: `''`,
  //   display: 'block',
  //   position: 'absolute',
  //   left: 0,
  //   bottom: 0,
  //   height: 2,
  //   width: '100%',
  //   backgroundColor: '#b64b4b',
  // },
});

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.updateBodyStyles = this.updateBodyStyles.bind(this);
  }

  updateBodyStyles() {
    if (this.state.isSideBarOpen === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }

  toggleSidebar() {
    this.setState(
      {
        isSidebarOpen: !this.state.isSidebarOpen,
      },
      this.updateBodyStyles,
    );
  }

  onKeyDown(e) {
    if (e.keyCode === 27) {
      if (this.state.isSidebarOpen) {
        this.toggleSidebar();
      }
    } else {
      return;
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    return (
      <header
        css={{
          position: 'fixed',
          width: '100%',
          top: 0,
          left: 0,
          backgroundColor: '#27282A',
          zIndex: 3,
        }}>
        <Container>
          <div
            css={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '3.625rem',
            }}>
            <Link
              to="/"
              css={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
              }}>
              <img css={{ marginBottom: 0 }} src={logo} alt="logo" />
            </Link>
            <nav
              css={{
                display: 'none',
                '@media (min-width: 768px)': {
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                  '& >a ': {
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    padding: '0 0.9375rem',
                    color: '#fff',
                    textDecoration: 'none',
                    letterSpacing: 0.5,
                    transition: 'color 0.2s ease-out',
                  },
                },
              }}>
              <Link css={linkStyles} to="/">
                Home
              </Link>
              <Link css={linkStyles} to="/about">
                About
              </Link>
              <Link css={linkStyles} to="/contact">
                Contact
              </Link>
            </nav>
            <NavToggle onClick={this.toggleSidebar} />
          </div>
        </Container>
        <Sidebar isShown={this.state.isSidebarOpen}>
          <NavClose onClick={this.toggleSidebar} />
          <NavLink to="/" onClick={this.toggleSidebar}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={this.toggleSidebar}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={this.toggleSidebar}>
            Contact
          </NavLink>
        </Sidebar>
        <Overlay
          onClick={this.toggleSidebar}
          isShown={this.state.isSidebarOpen}
        />
      </header>
    );
  }
}
