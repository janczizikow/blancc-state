import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {css} from 'glamor';
import {colors, fonts} from 'theme';

const propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  block: PropTypes.bool,

};

const defaultProps = {
  disabled: false,
};

const Btn = css({
  display: 'block',
  width: '100%',
  padding: '1em 1.5em',
  backgroundColor: '#2aa461',
  border: '1px solid transparent',
  color: colors.white,
  fontFamily: fonts,
  borderRadius: 4,
  outline: 0,
  cursor: 'pointer',
  userSelect: 'none',
});

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      preventDefault(e);
    }
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let Tag = this.props.to ? Link : 'button';
    return (
      <Tag
        {...Btn}
        style={this.props.disabled ? {'cursor': 'not-allowed'} : null }
        type={(Tag === 'button' ? 'button' : null)}
        onClick={this.onClick}
        {...this.props}
      />
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
