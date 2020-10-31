import { IconType } from '../../components/icon/Icon';

export interface INavigationEntry {
  name: string;
  path: string;
  icon: IconType;
}

const navigationEntries: INavigationEntry[] = [
  {
    name: 'Browse',
    path: '/browse',
    icon: 'list',
  },
  {
    name: 'Matches',
    path: '/matches',
    icon: 'volleyball',
  },
];

export default navigationEntries;
