import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { IRequestLoginUser, IRequestRegisterAccount, IRequestRegisterUser, IRequestUpdateAccount } from 'src/app/models/interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = environment.apiUrl
  private url1: string = 'api/users/register'
  private url2: string = 'api/users/login'
  private url3: string = 'api/users/get-accounts'
  private url4: string = 'api/users/register-account'
  private url5: string = 'api/users/update-account'

  constructor(
    private http: HttpClient,
  ) { }

  register(request: IRequestRegisterUser): Promise<any> {
    return firstValueFrom(this.http.post(`${this.apiUrl}${this.url1}`, request))
  }

  login(request: IRequestLoginUser): Promise<any> {
    return firstValueFrom(this.http.post(`${this.apiUrl}${this.url2}`, request))
  }

  getAccounts(page: number, limit: number): Promise<any>{
    return lastValueFrom(this.http.get(`${this.apiUrl}${this.url3}?page=${page}&limit=${limit}`))
  }

  registerAccount(request: IRequestRegisterAccount): Promise<any> {
    return firstValueFrom(this.http.post(`${this.apiUrl}${this.url4}`, request))
  }

  updateAccount(request: IRequestUpdateAccount): Promise<any> {
    return firstValueFrom(this.http.put(`${this.apiUrl}${this.url5}`, request))
  }
}
