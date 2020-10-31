export interface ITypography {
  defaultFont: string;
  titleSize: string;
}

const fonts = {
  roboto: `'Roboto', sans-serif;`,
};

const typography: ITypography = {
  defaultFont: fonts.roboto,
  titleSize: '1.5rem',
};

export default typography;
