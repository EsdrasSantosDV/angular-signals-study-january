import { inject, Injectable, signal } from '@angular/core';
import { OptionCalculator } from '../../../shared/types/interfaces/option-calculator';
import { CalculatorHttpService } from '../../../core/services/calculator-http-service';
import { tap } from 'rxjs';

export type CalculatorState = {
  optionsCalculator: OptionCalculator[];
  result: number;
  expression: string;
};

export const initialState: CalculatorState = {
  optionsCalculator: [],
  result: 0,
  expression: '',
};

@Injectable({ providedIn: 'root' })
export class FacadeCalculator {
  private state = signal(initialState);
  readonly vm$ = this.state.asReadonly();
  #httpCalculator = inject(CalculatorHttpService);

  loadOptions() {
    return this.#httpCalculator.getCalculator().pipe(
      tap(value =>
        this.state.update(state => ({
          ...state,
          optionsCalculator: value,
        }))
      )
    );
  }

  newActionCalculate(option: OptionCalculator) {
    this.state.update(state => ({
      ...state,
      expression: state.expression + option.visibleValue,
    }));
  }
}
