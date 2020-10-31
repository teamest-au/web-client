import { Subscriber } from 'rxjs';
import { ScopedBaseService } from '../scoped.base.service';
import {
  ICompetition,
  ICompetitionData,
  ICompetitionFilter,
} from './competition.types';

const INITIAL_VALUE = {
  competitions: undefined,
  loading: true,
};

const UNFILTERED_COMPETITIONS: ICompetition[] = [
  { name: 'Thebarton', active: true },
  { name: 'Henley Beach', active: false },
];

export class CompetitionService extends ScopedBaseService<
  ICompetitionData,
  ICompetitionFilter
> {
  constructor() {
    super(INITIAL_VALUE);
  }
  subscribeToValue(
    subscriber: Subscriber<ICompetitionData>,
    filter: ICompetitionFilter,
  ): void {
    const { includeInactive = false } = filter;
    setTimeout(() => {
      subscriber.next({
        loading: false,
        competitions: UNFILTERED_COMPETITIONS.filter(
          (c) => c.active || includeInactive,
        ),
      });
    }, 2000);
  }
}
