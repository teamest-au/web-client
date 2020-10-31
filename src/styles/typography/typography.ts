export interface ITypography {
  defaultFont: string;
  titleSize: string;
  pageHeadingSize: string;
}

const fonts = {
  roboto: `'Roboto', sans-serif;`,
};

const typography: ITypography = {
  defaultFont: fonts.roboto,
  titleSize: '1.5rem',
  pageHeadingSize: '1.25rem',
};

export default typography;
