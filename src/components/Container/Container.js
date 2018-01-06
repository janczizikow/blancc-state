import React, { Node } from 'react';

const Container = ({ children }: { children: Node }) => (
  <div
    css={{
      paddingLeft: 20,
      paddingRight: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 1200,
    }}>
    {children}
  </div>
);

export default Container;
