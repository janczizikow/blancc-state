import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: '1.5',
  headerFontFamily: [
    'Avenir Next',
    '-apple-system',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Avenir Next',
    '-apple-system',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  scaleRation: 2.25,
  bodyWeight: 400,
  headerWeight: 500,
  boldWeight: 'bold',
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options, styles) => ({
    body: {
      color: '#333',
    },
    h1: scale(4 / 4),
    h2: scale(3 / 4),
    h3: scale(2 / 4),
    h4: scale(1 / 6),
    h5: scale(-1 / 6),
    h6: scale(-2 / 6),
    blockquote: {
      ...scale(1 / 4),
      borderLeft: `${rhythm(1 / 6)} solid #eceeef`,
      paddingTop: rhythm(1 / 3),
      paddingBottom: rhythm(1 / 3),
      paddingLeft: rhythm(2 / 3),
      paddingRight: rhythm(2 / 3),
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    a: {
      color: '#2F8BE6',
    },
  }),
});

export default typography;
