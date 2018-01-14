import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

import { colors, fonts } from 'theme';

let InputStyle = css({
  display: 'inline-block',
  padding: '1em',
  marginBottom: '1em',
  width: '100%',
  border: '1px solid transparent',
  borderRadius: 4,
  outline: 'none',
  backgroundColor: '#2a2a2a',
  color: colors.white,
  fontFamily: fonts,
});

const propTypes = {
  type: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'p',
  type: 'text',
};

class Input extends React.Component {
  render() {
    let { type, state, tag, innerRef, ...attributes } = this.props;

    const fileInput = type === 'file';
    const textareaInput = type === 'textarea';
    const selectInput = type === 'select';

    let Tag = selectInput || textareaInput ? type : 'input';
    if (Tag === 'input') {
      attributes.type = type;
    }
    return <Tag {...InputStyle} {...attributes} ref={innerRef} />;
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
export default Input;
