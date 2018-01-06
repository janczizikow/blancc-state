import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/LayoutHeader';
import Footer from 'components/LayoutFooter';

// Import global styles

import 'css/reset.css';
import 'glamor/reset';

const TemplateWrapper = ({ children }) => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#353535',
      color: '#fff',
    }}>
    <Helmet
      title="Blancc State"
      meta={[
        { name: 'description', content: 'Official Website of Blancc State Production Label' },
        { name: 'keywords', content: 'Blanccstate, Jvern' },
      ]}
    />
    <Header />
    <div
      css={{
        flex: 1,
        marginTop: '3.625rem',
      }}>
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
