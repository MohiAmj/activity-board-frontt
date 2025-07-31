import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { jwtClaims } from '../models/jwt-model';
import { jwtDecode } from 'jwt-decode';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  protected http: HttpClient = inject(HttpClient);
  private readonly baseURL: string = environment.baseURL;

  get getToken(): string | null {
    return localStorage.getItem('token');
  }

  decodePayload(token: string): jwtClaims {
    return jwtDecode<jwtClaims>(token);
  }

  isTokenExpired(): boolean {
    if (this.getToken !== null) {
      const payload = this.decodePayload(this.getToken);
      return !payload || payload.exp * 1000 < Date.now();
    } else {
      return false;
    }
  }

  validateOnServer(): Observable<boolean> {
    const token = this.getToken;
    return this.http
      .get<boolean>(this.baseURL + '/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }
}
