import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

export type IconType = 'moon' | 'sun';

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
