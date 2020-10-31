import React from 'react';

import ListItem from './ListItem';

export interface IListProps {
  children: React.ReactNode;
}

function List(props: IListProps) {
  const { children } = props;
  return <div>{children}</div>;
}

List.Item = ListItem;

export default List;
