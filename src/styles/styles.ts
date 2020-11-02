import Theme from './theme';

import colours from './colours/colours';
import spacing from './spacing/spacing';
import typography from './typography/typography';

export default function getStyles(theme?: Theme) {
  return {
    colours: colours(theme),
    spacing,
    typography,
  };
}
