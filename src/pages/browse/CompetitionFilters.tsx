import React from 'react';
import Button from '../../components/button/Button';
import { ICompetitionFilter } from '../../services/competition/competition.types';

export interface ICompetitionFilterProps {
  filters: ICompetitionFilter;
  onFiltersChanged: (filters: ICompetitionFilter) => void;
}

export default function CompetitionFilters(props: ICompetitionFilterProps) {
  const { filters, onFiltersChanged } = props;
  return (
    <div>
      <Button
        onClick={() =>
          onFiltersChanged({
            ...filters,
            includeInactive: !filters.includeInactive,
          })
        }
      >
        {filters.includeInactive ? 'Hide Inactive' : 'Show Inactive'}
      </Button>
    </div>
  );
}
