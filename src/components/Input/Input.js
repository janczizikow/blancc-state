import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import cn from 'classnames';
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
  transition: 'all 0.2s ease',
});

const InputInvalid = css({
  border: `1px solid ${colors.red}`,
});

const propTypes = {
  type: PropTypes.string,
  valid: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'p',
  type: 'text',
};

class Input extends React.PureComponent {
  render() {
    let { type, state, valid, tag, className, innerRef, ...attributes } = this.props;

    const fileInput = type === 'file';
    const textareaInput = type === 'textarea';
    const selectInput = type === 'select';

    let Tag = selectInput || textareaInput ? type : 'input';
    if (Tag === 'input') {
      attributes.type = type;
    }
    return <Tag className={cn(`${InputStyle}`, className)} {...attributes} ref={innerRef} />;
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
export default Input;