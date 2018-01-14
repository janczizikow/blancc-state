import React from 'react';
import PropTypes from 'prop-types';

const propTypes  = {
  tag: PropTypes.string,
  for: PropTypes.string,
};

const defaultProps = {
  tag: 'label',
};

const Label = (props) => {

  const {
    tag: Tag,
    for: htmlFor,
  } = props;

  return (
    <Tag
      htmlFor={htmlFor}
      {...props}

      css={{

      }}
    />
  );
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
export default Label;