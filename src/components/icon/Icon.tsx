import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faMoon,
  faSun,
  faVolleyballBall,
  faListUl,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

export type IconType = 'moon' | 'sun' | 'volleyball' | 'list' | 'chevron-left';

export interface IIconProps {
  type: IconType;
  onClick?: () => void;
}

function resolveIcon(type: IconType) {
  switch (type) {
    case 'moon':
      return faMoon;
    case 'sun':
      return faSun;
    case 'volleyball':
      return faVolleyballBall;
    case 'list':
      return faListUl;
    case 'chevron-left':
      return faChevronLeft;
    default:
      return faCoffee;
  }
}

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  ${(props) =>
    props.onClick &&
    `
    cursor: pointer;
  `}
`;

export default function Icon(props: IIconProps) {
  const { type, onClick } = props;
  return <StyledFontAwesomeIcon onClick={onClick} icon={resolveIcon(type)} />;
}
