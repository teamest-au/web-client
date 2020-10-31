import React from 'react';
import styled from 'styled-components';

import NavigationItem from './NavigationItem';
import navigationEntries from './navigation_entries';

const Container = styled.div`
  display: flex;
  * {
    flex-grow: 1;
  }
  background-color: ${(props) =>
    props.theme.colours.secondaryEmphasisBackground};
  color: ${(props) => props.theme.colours.secondaryEmphasisFontColour};
`;

export interface INavigationProps {
  onNavigate: (path: string) => void;
}

export default function Navigation(props: INavigationProps) {
  const { onNavigate } = props;
  return (
    <Container>
      {navigationEntries.map((entry) => (
        <NavigationItem
          key={entry.name}
          entry={entry}
          onNavigate={() => onNavigate(entry.path)}
        />
      ))}
    </Container>
  );
}
