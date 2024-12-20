import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IConsultant } from '../../models';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ConsultantsService } from '../../services';
import { LoadList, ToggleOrder } from './consultant.actions';

interface IConsultantsModel {
  consultants: IConsultant[];
  isAscending: boolean
}

@State<IConsultantsModel>({
  name: 'consultants',
  defaults: {
    consultants: [],
    isAscending: true
  },
})
@Injectable()
export class ConsultantsState {
  @Selector()
  static consultants(state: IConsultantsModel): IConsultant[] {
    return state.consultants;
  }

  @Selector()
  static isAscending(state: IConsultantsModel): boolean {
    return state.isAscending;
  }

  public constructor(private consultantsService: ConsultantsService) { }

  @Action(LoadList)
  public loadList({
    patchState,
  }: StateContext<IConsultantsModel>): Observable<IConsultant[]> {
    return this.consultantsService.consultantstems$.pipe(
      tap((result: IConsultant[]) => {
        patchState({
          consultants: result.sort((a, b) => {

            if (a.firstname < b.firstname) {
              return -1;
            }
            if (a.firstname > b.firstname) {
              return 1;
            }
            return 0;
          }),
        });
      }),
      catchError((error) => {
        throw error;
      }),
    );
  }

  @Action(ToggleOrder)
  toggleOrder(
    { getState, setState }: StateContext<IConsultantsModel>,
    { isAscending }: ToggleOrder) {
    const state = getState();
    const newConsultants = [...state.consultants]
    newConsultants.sort((a, b) => {
      if (a.firstname < b.firstname) {
        return isAscending ? -1 : 1;
      }
      if (a.firstname > b.firstname) {
        return isAscending ? 1 : -1;
      }
      return 0;
    }),
      setState({
        consultants: newConsultants,
        isAscending
      });
  }
}
