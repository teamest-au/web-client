import React from 'react';
import styled from 'styled-components';

import NavigationItem from './NavigationItem';
import navigationEntries from './navigation_entries';

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colours.secondaryEmphasisBackground};
  color: ${(props) => props.theme.colours.emphasisFontColour};
  display: flex;
  justify-content: center;
`;

const NavigationContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.spacing.maxPageWidth};
  display: flex;
  > * {
    margin-right: 2rem;
  }
  color: ${(props) => props.theme.colours.secondaryEmphasisFontColour};
`;

export interface INavigationProps {
  onNavigate: (path: string) => void;
}

export default function Navigation(props: INavigationProps) {
  const { onNavigate } = props;
  return (
    <Container>
      <NavigationContainer>
        {navigationEntries.map((entry) => (
          <NavigationItem
            key={entry.name}
            entry={entry}
            onNavigate={() => onNavigate(entry.path)}
          />
        ))}
      </NavigationContainer>
    </Container>
  );
}
