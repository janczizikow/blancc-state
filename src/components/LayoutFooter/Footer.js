import React from 'react';
import Link from 'gatsby-link';
import { css } from 'glamor';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaSoundcloud,
} from 'react-icons/lib/fa';
import Container from 'components/Container';

const Y = new Date().getFullYear();
const socialLinks = {
  facebook: 'https://www.facebook.com/blanccstate/',
  twitter: 'https://twitter.com/BLANCCSTATEVERN',
  instagram: 'https://www.instagram.com/blanccstate/',
  soundcloud: 'https://soundcloud.com/blanccstateradio',
};

const linkStyle = {};

let footerSocial = css({ margin: '0 1.25rem' });

const Footer = props => {
  return (
    <footer
      css={{
        padding: '36px 0px',
        backgroundColor: '#232323',
      }}>
      <Container>
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            '@media(min-width: 992px)': {
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            },
          }}>
          <nav
            css={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              maxWidth: 315,
              margin: '0 auto 1rem',
              color: '#fff',
              '& > a': {
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
                height: 40,
                transition: 'color 0.2s ease-out',
                ':after': {
                  content: `''`,
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 38,
                  height: 38,
                  backgroundColor: '#323232',
                  borderRadius: '50%',
                  opacit: 1,
                  transition: 'all .3s',
                },
                '> a:hover': {
                  ':after': {
                    opacity: 0,
                    transform: 'scale(1.4, 1.4)',
                  },
                },
                ':before': {
                  content: `''`,
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 38,
                  height: 38,
                  border: '1px solid #323232',
                  borderRadius: '50%',
                },
              },
              '@media(min-width: 992px)': {
                margin: 0,
              },
            }}>
            <a
              href={socialLinks.facebook}
              rel="external noopener noreferrer"
              target="_blank"
              {...footerSocial}>
              <FaFacebook size={18} css={{ zIndex: 2 }} />
            </a>
            <a
              href={socialLinks.twitter}
              rel="external noopener noreferrer"
              target="_blank"
              {...footerSocial}>
              <FaTwitter size={18} css={{ zIndex: 2 }} />
            </a>
            <a
              href={socialLinks.instagram}
              rel="external noopener noreferrer"
              {...footerSocial}>
              <FaInstagram size={18} css={{ zIndex: 2 }} />
            </a>
            <a
              href={socialLinks.soundcloud}
              rel="external noopener noreferrer"
              {...footerSocial}>
              <FaSoundcloud size={18} css={{ zIndex: 2 }} />
            </a>
          </nav>
          <p
            css={{
              marginBottom: 0,
              fontSize: '0.75rem',
              fontWeight: 300,
              color: '#50595b',
            }}>
            {' '}
            &copy; {Y} Blancc State. All rights reserved.{' '}&#47;{' '}
            <Link to="/privacy">Privacy Policy</Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
