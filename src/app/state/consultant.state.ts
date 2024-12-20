import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';

import { IConsultant } from '../../models';
import { ConsultantsService } from '../../services';
import { LoadList, ToggleOrder } from './consultant.actions';
import { Consultants } from '../../types/api';

interface IConsultantsModel {
  consultants: Consultants;
  isAscending: boolean
}

@State<IConsultantsModel>({
  name: 'consultants',
  defaults: {
    consultants: {} as Consultants,
    isAscending: true
  },
})
@Injectable()
export class ConsultantsState implements NgxsOnInit {

  ngxsOnInit(ctx: StateContext<IConsultantsModel>) {
    ctx.dispatch(new LoadList());
  }

  @Selector()
  static consultants(state: IConsultantsModel): IConsultant[] {
    return state?.consultants?.records?.page || [];
  }

  @Selector()
  static isAscending(state: IConsultantsModel): boolean {
    return state.isAscending;
  }

  public constructor(private consultantsService: ConsultantsService) { }

  @Action(LoadList)
  public loadList({
    patchState,
  }: StateContext<IConsultantsModel>): Observable<Consultants> {
    return this.consultantsService.consultantstems$().pipe(
      tap((result: Consultants) => {
        const newstate = {
          consultants: {
            ...result,
            records: {
              ...result.records,
              page: result.records.page.map(({ fullname, firstname, image, specialties, locations, type }) => ({
                fullname,
                firstname,
                image,
                specialties,
                locations,
                type
              })).sort((a, b) => {
                if (a.firstname < b.firstname) {
                  return -1;
                }
                if (a.firstname > b.firstname) {
                  return 1;
                }
                return 0;
              })
            }
          }
        }
        patchState({ consultants: newstate.consultants });
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
    const newConsultants = [...state.consultants.records.page].sort((a, b) => {
      if (a.firstname < b.firstname) {
        return isAscending ? -1 : 1;
      }
      if (a.firstname > b.firstname) {
        return isAscending ? 1 : -1;
      }
      return 0;
    })
    setState({
      ...state,
      consultants: {
        ...state.consultants,
        records: {
          ...state.consultants.records,
          page: newConsultants
        }
      },
      isAscending
    });
  }
}
