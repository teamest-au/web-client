import React from 'react';
import styled from 'styled-components';

import Icon from '../../components/icon/Icon';
import Theme from '../../styles/theme';
import ProfileImage from './ProfileImage';

const StyledHeader = styled.header`
  font-size: ${(props) => props.theme.typography.titleSize};
  background-color: ${(props) => props.theme.colours.emphasisBackground};
  color: ${(props) => props.theme.colours.emphasisFontColour};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.typography.titleSize};
  margin: 0;
  font-weight: 600;
`;

const HeaderItemsContainer = styled.div`
  align-items: center;
  display: flex;
  *:not(:first-child) {
    margin-left: 1rem;
  }
`;

export interface IHeaderProps {
  currentTheme: Theme;
  onThemeChanged: (theme: Theme) => void;
}

export default function Header(props: IHeaderProps) {
  const { currentTheme, onThemeChanged } = props;
  return (
    <StyledHeader>
      <HeaderItemsContainer>
        <Title>Teamest</Title>
      </HeaderItemsContainer>
      <HeaderItemsContainer>
        <Icon
          onClick={() =>
            onThemeChanged(currentTheme === 'light' ? 'dark' : 'light')
          }
          type={currentTheme === 'light' ? 'moon' : 'sun'}
        />
        <ProfileImage />
      </HeaderItemsContainer>
    </StyledHeader>
  );
}
