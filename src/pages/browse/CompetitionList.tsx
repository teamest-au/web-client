import React from 'react';
import List from '../../components/list/List';
import { ICompetition } from '../../services/competition/competition.types';

export interface ICompetitionListProps {
  competitions?: ICompetition[];
}

export default function CompetitionList(props: ICompetitionListProps) {
  const { competitions } = props;
  if (competitions) {
    return (
      <List>
        {competitions.map((c) => (
          <List.Item key={c.name}>{c.name}</List.Item>
        ))}
      </List>
    );
  } else {
    return (
      <List>
        <List.Item>Skeleton1</List.Item>
        <List.Item>Skeleton2</List.Item>
      </List>
    );
  }
}
