import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/lib/md';

import {colors} from 'theme';

const propTypes = {
  color: PropTypes.string,
  top :PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
};

const defaultProps = {
  color: colors.white,

};

const NavClose = props => {
  return (
    <button
      onClick={props.onClick}
      css={{
        position: 'absolute',
        top: 5,
        right: 16,
        padding: 0,
        width: 48,
        height: 48,
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        cursor: 'pointer',
      }}
      {...props}>
      <MdClose size={24} color={props.color} />
    </button>
  );
};

NavClose.propTypes = propTypes;
NavClose.defaultProps = defaultProps;

export default NavClose;