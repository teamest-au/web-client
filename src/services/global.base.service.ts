import { BehaviorSubject, Observable } from 'rxjs';

export abstract class GlobalBaseService<ValueType> {
  private initialValue: ValueType;
  private subject$: BehaviorSubject<ValueType>;

  public constructor(initialValue: ValueType) {
    this.initialValue = initialValue;
    this.subject$ = new BehaviorSubject<ValueType>(initialValue);
  }

  protected updateValue(newValue: ValueType) {
    this.subject$.next(newValue);
  }

  getObservable(): Observable<ValueType> {
    return this.subject$;
  }

  getInitialValue(): ValueType {
    return this.initialValue;
  }
}
