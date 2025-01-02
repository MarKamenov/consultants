import { inject, Injectable } from '@angular/core';
import { Observable, } from 'rxjs/internal/Observable';
import { catchError, tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

import { ApiBaseService, PaginationService } from '../services';
import { Consultants } from '../types/api';

@Injectable({
  providedIn: 'root',
})
export class ConsultantsService {
  private readonly apiUrl = 'https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=sR_cCweEaptts3ExMPzv';
  private httpService = inject(ApiBaseService)
  private paginationService = inject(PaginationService);
  /**
   * Gets: gets list of consultants ,
   */
  public consultantstems$ = (query?: string): Observable<Consultants> => {
    let params = new HttpParams()
      .set('page', this.paginationService.currentPage())
      .set('per_page', this.paginationService.itemsPerPage());

    if (query) {
      params = params.set('query', query);
    }
    return this.httpService.get<Consultants>(this.apiUrl, { params }).pipe(
      tap((response: Consultants) => {
        this.paginationService.setTotalPages(
          response.info.page.num_pages
        )
      }),
      catchError((error) => {
        console.error('API Error:', error);
        throw error;
      })
    );
  }
}
