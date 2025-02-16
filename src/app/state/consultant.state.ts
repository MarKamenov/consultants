import * as store from '@ngxs/store';
import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';

import { IConsultant } from '../../models';
import { ConsultantsService } from '../../services';
import { LoadList, ToggleOrder } from './consultant.actions';
import { Consultants } from '../../types/api';

interface IConsultantsModel {
  consultants: Consultants;
  isAscending: boolean
}

@store.State<IConsultantsModel>({
  name: 'consultants',
  defaults: {
    consultants: {} as Consultants,
    isAscending: true
  },
})
@Injectable()
export class ConsultantsState implements store.NgxsOnInit {

  private readonly consultantsService = inject(ConsultantsService)

  ngxsOnInit(ctx: store.StateContext<IConsultantsModel>) {
    ctx.dispatch(new LoadList());
  }

  @store.Selector()
  static consultants(state: IConsultantsModel): IConsultant[] {
    return state?.consultants?.records?.page || [];
  }

  @store.Selector()
  static isAscending(state: IConsultantsModel): boolean {
    return state.isAscending;
  }

  @store.Action(LoadList)
  public loadList({
    patchState,
  }: store.StateContext<IConsultantsModel>): Observable<Consultants> {
    return this.consultantsService.consultants$().pipe(
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

  @store.Action(ToggleOrder)
  toggleOrder(
    { getState, setState }: store.StateContext<IConsultantsModel>,
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
