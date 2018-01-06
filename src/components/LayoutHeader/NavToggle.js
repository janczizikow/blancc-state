import React from 'react';
import { MdMenu } from 'react-icons/lib/md';

const NavToggle = props => {
  return (
    <button
      css={{
        padding: 0,
        width: 24,
        height: '100%',
        backgroundColor: 'transparent',
        border: 0,
        borderRadius: 3,
        outline: 0,
        color: '#fff',
        cursor: 'pointer',
        '@media (min-width: 768px)': {
          display: 'none',
        },
      }}
      {...props}>
      <MdMenu size={24} />
    </button>
  );
};

export default NavToggle;
