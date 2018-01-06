import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isShown: PropTypes.bool,
};

const defaultProps = {
  isShown: false,
};

const Sidebar = props => {
  const { isShown, ...rest } = props;

  return (
    <div
      css={{
        display: 'flex',
        position: 'fixed',
        top: 0,
        right: 0,
        width: 256,
        height: '100vh',
        flexDirection: 'column',
        padding: '77px 20px',
        background: '#2c2c2c',
        transform: 'translateX(100%)',
        transition: 'all .45s cubic-bezier(.23,1,.32,1)',
        willChange: 'transform',
        overflowY: 'auto',
        zIndex: 4,
      }}
      {...rest}
      style={isShown ? { transform: 'translateX(0)' } : null}
    />
  );
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;
export default Sidebar;
