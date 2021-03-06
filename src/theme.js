export const colors = {
  dark: '#232323',
  grey: '#353535',
  lightGrey: '#484848',
  border: '#2e2e2e',
  white: '#fff',
  secondary: '#2f8be6',
};

export const fonts =
  "'Avenir Next', -apple-system, Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif";

const SIZES = {
  xs: { min: 0, max: 575 },
  sm: { min: 576, max: 767 },
  md: { min: 768, max: 991 },
  lg: { min: 992, max: 1199 },
  xl: { min: 1200, max: Infinity },
};

const media = {};

export const sharedStyles = {
  hero: {
    height: 140,
    backgroundColor: '#232323',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: '2.5em 0',
    maxWidth: '52.5rem',
    margin: '0 auto',
  },
  link: {
    textDecoration: 'none',
    color: colors.secondary,
    borderBottom: `1px dashed ${colors.secondary}`,
    ':hover': {
      borderBottom: `1px solid ${colors.secondary}`,
    },
  },
};
