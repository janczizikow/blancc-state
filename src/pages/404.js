import React from 'react';
import Link from 'gatsby-link';
import Container from 'components/Container';
import { sharedStyles } from 'theme';

const NotFoundPage = () => (
  <div>
    <div css={sharedStyles.hero}>
      <h1
        css={{
          fontSize: '2.5em',
        }}>
        Page Not Found
      </h1>
    </div>
    <Container>
      <p>The page you were looking for isn't here</p>
      <Link to="/">Back to home page</Link>
    </Container>
  </div>
);

export default NotFoundPage;
