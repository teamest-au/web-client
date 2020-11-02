import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/icon/Icon';
import { INavigationEntry } from './navigation_entries';

export interface INavigationItemProps {
  entry: INavigationEntry;
  onNavigate: () => void;
}

const Container = styled.div`
  padding: 0.5rem;
  text-align: center;
  * {
    margin: 0 0.3rem;
  }
`;

export default function NavigationItem(props: INavigationItemProps) {
  const { entry, onNavigate } = props;
  return (
    <Container onClick={onNavigate}>
      <Icon type={entry.icon} />
      <span>{entry.name}</span>
    </Container>
  );
}
