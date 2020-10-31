import { Observable, Subscriber } from 'rxjs';
import { OptionalArgTuple } from '../utilities/type.utils';

export abstract class ScopedBaseService<ValueType, FilterType> {
  private initialValue: ValueType;

  public constructor(initialValue: ValueType) {
    this.initialValue = initialValue;
  }

  getObservable(
    ...filter: OptionalArgTuple<FilterType>
  ): Observable<ValueType> {
    return new Observable<ValueType>((subscriber) => {
      subscriber.next(this.initialValue);
      this.subscribeToValue(subscriber, ...filter);
    });
  }

  abstract subscribeToValue(
    subscriber: Subscriber<ValueType>,
    ...filter: OptionalArgTuple<FilterType>
  ): void;

  getInitialValue(): ValueType {
    return this.initialValue;
  }
}
