import React from 'react';
import { css } from 'glamor';
import { colors, fonts } from 'theme';

let TextAreaStyle = css({
  display: 'inline-block',
  padding: '1em',
  marginBottom: '1em',
  width: '100%',
  border: 0,
  borderRadius: 4,
  outline: 'none',
  backgroundColor: '#2a2a2a',
  color: colors.white,
  resize: 'none',
  fontFamily: fonts,
});

const FormText = props => {
  return <textarea {...props} {...TextAreaStyle} />;
};

export default FormText;
