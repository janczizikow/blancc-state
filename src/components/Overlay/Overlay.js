import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isShown: PropTypes.bool,
};

const defaultProps = {
  isShown: false,
};

const Overlay = props => {
  const { isShown, ...rest } = props;

  return (
    <div
      css={{
        position: 'absolute',
        visibility: 'hidden',
        width: '100%',
        height: '100vh',
        top: 0,
        left: 0,
        background: 'rgba(35, 35, 35, .82)',
        opacity: 0,
        transition: 'opacity .25s ease',
        zIndex: 2,
      }}
      {...rest}
      style={props.isShown ? { opacity: 1, visibility: 'visible' } : null}
    />
  );
};

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
export default Overlay;
