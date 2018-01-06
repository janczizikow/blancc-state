import React from 'react';
import { MdClose } from 'react-icons/lib/md';

const NavClose = props => {
  return (
    <button
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
      <MdClose size={24} color="#fff" />
    </button>
  );
};

export default NavClose;
