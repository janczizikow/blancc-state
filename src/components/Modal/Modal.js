import React from 'react';
import PropTypes from 'prop-types';

import NavClose from 'components/LayoutHeader/NavClose';
import {colors} from 'theme';

const propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  isShown: PropTypes.bool,
};

const defaultProps = {
  isShown: false,
};

class Modal extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    let {
      title,
      onClick,
      isShown,
      children,
    } = this.props;

    if (!isShown) {
      return null;
    }

    return (
      <div role="dialog" tabIndex={-1} css={{
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        outline: 0,
        overflowY: 'auto',
        zIndex: 1000,
      }}>
        <div css={{
          position: 'relative',
          flex: '0 1 auto',
          margin: '1.875rem',
          width: '75%',
          maxWidth: 768,
          zIndex: 999,
        }}>
          <div css={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: colors.white,
            color: colors.grey,
            borderRadius: 4,
          }}>
            <div css={{
              position: 'relative',
              padding: '1.5rem 1.25rem 1.5rem',
              width: '100%',
            }}>
              <h3 css={{margin: 0}}>{title}</h3>
              <NavClose css={{top: 0, right: 2}} color={colors.dark} onClick={onClick}/>
            </div>
            <div css={{
              padding: '0 1.25rem 1.5rem',
            }}>
              {children}
            </div>
          </div>
        </div>
        <div
          onClick={onClick}
          css={{
            position: 'fixed',
            display: 'block',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 998,
            background:colors.dark,
            opacity: '.75',
          }}
        />
      </div>
    );
  }
}


Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;