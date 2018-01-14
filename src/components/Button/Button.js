import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import cn from 'classnames';
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
  position: 'relative',
  display: 'block',
  width: '100%',
  padding: '1em 1.5em',
  backgroundColor: '#2aa461',
  border: '1px solid #2aa461',
  color: colors.white,
  fontFamily: fonts,
  textAlign: 'center',
  borderRadius: 4,
  outline: 0,
  cursor: 'pointer',
  userSelect: 'none',
  '::after': {
    content: `''`,
    position: 'absolute',
    display: 'block',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    opacity: 0,
    transition: 'all 0.45s cubic-bezier(0.25,1,0.33,1)',
  },
  ':hover': {
    ':after': {
      opacity: '.05',
    },
  },
  ':active': {
    ':after': {
      backgroundColor: '#000',
      opacity: '0.05',
    },
  },
});

const BtnDisabled = css({
  opacity: '.65',
  cursor: 'not-allowed',
  ':hover': {
    'after': {
      opacity: 0,
    },
  },
});

class Button extends React.PureComponent {
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
    let {
      disabled,
      className,
    } = this.props;
    return (
      <Tag
        className={cn(`${Btn}`, disabled && `${BtnDisabled}`,  className)}
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