import React from 'react';
import Button from 'components/Button';
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
      <div css={sharedStyles.content}>
        <p>The page you were looking for isn't here</p>
        <Button to="/">Back to home page</Button>
      </div>
    </Container>
  </div>
);

export default NotFoundPage;
