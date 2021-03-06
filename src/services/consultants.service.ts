import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import { map } from 'rxjs/operators';
import {ConsultantDTO} from './../models'

@Injectable({
	providedIn: 'root',
})
export class ConsultantsService {
	private readonly apiUrl = 'https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=sR_cCweEaptts3ExMPzv&page=1&per_page=20';

	public constructor(private http: ApiBaseService) {}

	/**
	 * Gets: gets list of consultants ,
	 */
	public consultantstems$ =  this.http.get<any[]>(this.apiUrl).pipe(map((data:any) => data.records.page.map(item => new ConsultantDTO(item)
	)));
}
