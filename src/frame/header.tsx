import React from 'react';
import styled from 'styled-components';

import Icon from '../components/icon/Icon';

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colours.emphasisBackground};
  color: ${(props) => props.theme.colours.emphasisFontColour};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.typography.titleSize};
  margin: 0;
  font-weight: 400;
`;

export interface IHeaderProps {
  onDarkModeToggled: () => void;
}

export default function Header(props: IHeaderProps) {
  const { onDarkModeToggled } = props;
  return (
    <StyledHeader>
      <Title>Teamest</Title>
      <Icon onClick={onDarkModeToggled} type='moon' />
    </StyledHeader>
  );
}
