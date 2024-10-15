import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AlertService } from '../alert/alert.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(
    private alertService: AlertService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      Authorization: localStorage.getItem('currentUser') ? `Bearer ${JSON.parse(localStorage.getItem('currentUser')!).accessToken}` : ''
    })

    const reqClone = req.clone({
      headers
    })

    return next.handle(reqClone)
      .pipe(catchError((error: HttpErrorResponse) => {
        if(error && error.status == 401 || error.error.status == 401){
          this.alertService.alert('Sesión expirada', 'error')
          localStorage.clear()
          this.router.navigate(['/login'])
          return throwError(error)
        } else {
          return throwError(error)
        }
      }));
  }
}
