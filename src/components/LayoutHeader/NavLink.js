import React from 'react';
import Link from 'gatsby-link';

const NavLink = (props) => {

  return (
    <Link
      css={{
        position: 'relative',
        width: '100%',
        padding: 11,
        textDecoration: 'none',
        userSelect: 'none',
        outline: 0,
        borderRadius: 3,
        '::after': {
          content: `''`,
          display: 'block',
          position: 'absolute',
          bottom: 0,
          left: -20,
          height: '100%',
          width: 0,
          background: '#b64b4b',
        },
        ':focus': {
          backgroundColor: '#353535',
        },
      }}
      {...props}
    />
  );
};

export default NavLink;
