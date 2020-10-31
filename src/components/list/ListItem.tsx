import React from 'react';
import styled from 'styled-components';

export interface IListItemProps {
  children: React.ReactNode;
}

export default function ListItem(props: IListItemProps) {
  const { children } = props;
  return <div>{children}</div>;
}
