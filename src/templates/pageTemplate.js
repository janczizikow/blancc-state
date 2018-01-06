import React from 'react'
import PropTypes from 'prop-types'
import MarkdownPage from 'components/MarkdownPage'

const propTypes = {
  data: PropTypes.object.isRequired,
}

export default function Template({data}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark
  return (
    <MarkdownPage
      markdownRemark={data.markdownRemark}
    />
  )
}

Template.propTypes = propTypes

export const pageQuery = graphql`
  query MarkdownPagesQueryByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
