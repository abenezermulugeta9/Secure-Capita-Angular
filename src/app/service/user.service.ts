import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { CustomHttpResponse } from '../interface/custom-http-response';
import { Profile } from '../interface/profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private server: string = 'http://localhost :8081';
  constructor(private http: HttpClient) { }

  login$(email: string, password: string): Observable<CustomHttpResponse<Profile>> {
    return this.http.post<CustomHttpResponse<Profile>>(`${this.server}/users/login`, { email, password })
      .pipe(tap(console.log), catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<never> {
    let errorMessage: string;

    // if error is instance of the ErrorEvent class it means the error happens in the client code
    if (errorResponse.error instanceof ErrorEvent) {
      errorMessage = `A client side error occurred - ${errorResponse.error.message}`;
    } else {
      if (errorResponse.error.reason) {
        errorMessage = errorResponse.error.reason;
      } else {
        errorMessage = `An error occurred - error status ${errorResponse.error.status}`;
      }
    }

    return throwError(() => errorMessage);
  }
}
