import React, { useState } from 'react';
import Page from '../../frame/page/Page';
import { CompetitionService } from '../../services/competition/competition.service';
import {
  ICompetitionData,
  ICompetitionFilter,
} from '../../services/competition/competition.types';
import { useScopedConnect } from '../../utilities/connect.hook';
import CompetitionFilter from './CompetitionFilters';
import CompetitionList from './CompetitionList';

const browseCompetitionService = new CompetitionService();

export default function BrowsePage() {
  const [filters, setFilters] = useState<ICompetitionFilter>({
    includeInactive: false,
  });
  const { loading, competitions } = useScopedConnect<
    ICompetitionData,
    ICompetitionFilter
  >(browseCompetitionService, filters);
  return (
    <Page heading='Competitions'>
      <CompetitionList competitions={loading ? undefined : competitions} />
      <CompetitionFilter
        filters={filters}
        onFiltersChanged={(newFilters) => setFilters(newFilters)}
      />
    </Page>
  );
}
