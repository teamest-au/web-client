import Theme from '../theme';
import lightColours from './themes/light';
import darkColours from './themes/dark';

export interface IColours {
  mainBackground: string;
  mainFontColour: string;
  emphasisBackground: string;
  emphasisFontColour: string;
  secondaryEmphasisBackground: string;
  secondaryEmphasisFontColour: string;
  buttonColour: string;
}

export default function colours(theme?: Theme): IColours {
  switch (theme) {
    case 'dark':
      return darkColours;
    case 'light':
    default:
      return lightColours;
  }
}
