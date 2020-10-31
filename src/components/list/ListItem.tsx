import React from 'react';
import styled from 'styled-components';

export interface IListItemProps {
  children: React.ReactNode;
}

const StyledListItem = styled.div`
  padding: 1rem;
`;

export default function ListItem(props: IListItemProps) {
  const { children } = props;
  return <StyledListItem>{children}</StyledListItem>;
}
