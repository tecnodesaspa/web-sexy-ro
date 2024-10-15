import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl: string = environment.apiUrl
  private idServer = environment.idServer
  private url1: string = 'api/events/get-events'
  
  constructor(
    private http: HttpClient
  ) { }

  getEvents(): Promise<any>{
    return lastValueFrom(this.http.get(`${this.apiUrl}${this.url1}?page=1&limit=0&idServer=${this.idServer}`))
  }
}
