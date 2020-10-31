import Theme from './theme';

import colours from './colours/colours';
import typography from './typography/typography';

export default function getStyles(theme?: Theme) {
  return {
    colours: colours(theme),
    typography,
  };
}
