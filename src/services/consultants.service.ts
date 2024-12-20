import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpParams } from '@angular/common/http';

import { ApiBaseService } from './api-base.service';

@Injectable({
  providedIn: 'root',
})
export class ConsultantsService {
  private readonly apiUrl = 'https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=sR_cCweEaptts3ExMPzv';
  private httpService = inject(ApiBaseService)
  /**
   * Gets: gets list of consultants ,
   */
  public consultantstems$ = (page = 1, perPage = 20, query?: string): Observable<any> => {
    let params = new HttpParams()
      .set('page', page)
      .set('per_page', perPage);

    if (query) {
      params = params.set('query', query);
    }
    return this.httpService.get<any[]>(this.apiUrl, { params })
  }
}
