import React from 'react';
// import PropTypes from 'prop-types';
import Container from 'components/Container';

import { sharedStyles } from 'theme';

// import type { Node } from 'types'

// const propTypes = {
//   markdownRemark: PropTypes.Node,
// }

const MarkdownPage = props => {
  let { markdownRemark, ...rest } = props;
  return (
    <div {...rest}>
      <div css={sharedStyles.hero}>
        <h1>{markdownRemark.frontmatter.title}</h1>
      </div>
      <Container>
        <div
          css={sharedStyles.content}
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
      </Container>
    </div>
  );
};

// MarkdownPage.propTypes = propTypes
export default MarkdownPage;
