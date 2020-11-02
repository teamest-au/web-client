// import original module declarations
import 'styled-components';
import { IColours } from './colours/colours';
import { ISpacing } from './spacing/spacing';
import { ITypography } from './typography/typography';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colours: IColours;
    typography: ITypography;
    spacing: ISpacing;
  }
}
