import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

type OptionalArgTuple<T> = T extends undefined ? [] : [T];

export function useConnect<StateType, FilterType>(
  connect: (filter: OptionalArgTuple<FilterType>) => Observable<StateType>,
  initialValue: StateType,
  ...filter: OptionalArgTuple<FilterType>
) {
  const [state, setState] = useState<StateType>(initialValue);
  useEffect(() => {
    const stateChanges$ = connect(filter);
    const subscription = stateChanges$.subscribe((value) => {
      setState(value);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [filter, connect]);
  return state;
}
