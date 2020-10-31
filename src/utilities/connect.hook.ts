import { useEffect, useState } from 'react';
import { GlobalBaseService } from '../services/global.base.service';
import { ScopedBaseService } from '../services/scoped.base.service';

import { OptionalArgTuple } from './type.utils';

export function useGlobalConnect<StateType>(
  observableService: GlobalBaseService<StateType>,
) {
  const [state, setState] = useState<StateType>(
    observableService.getInitialValue(),
  );
  useEffect(() => {
    const stateChanges$ = observableService.getObservable();
    const subscription = stateChanges$.subscribe((value) => {
      setState(value);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [observableService]);
  return state;
}

export function useScopedConnect<StateType, FilterType>(
  observableService: ScopedBaseService<StateType, FilterType>,
  ...filter: OptionalArgTuple<FilterType>
) {
  const [state, setState] = useState<StateType>(
    observableService.getInitialValue(),
  );
  const filterHash = JSON.stringify(filter);
  useEffect(() => {
    const stateChanges$ = observableService.getObservable(...filter);
    const subscription = stateChanges$.subscribe((value) => {
      setState(value);
    });
    return () => {
      subscription.unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observableService, filterHash]);
  return state;
}
