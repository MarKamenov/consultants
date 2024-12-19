/**
 * Wrapper class for HttpClient to help
 * make strongly typed http requests.
 */

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  private http = inject(HttpClient);

  /**
   * GET: get api request.
   *
   * @param {string} url api url
   * @param {{}} options http options
   * @returns {Observable<*>} get return value
   */
  public get = <T>(url: string, options?: Record<string, unknown>): Observable<T> =>
    this.http.get<T>(url, options).pipe(
      catchError(this.handleError),
    );

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
