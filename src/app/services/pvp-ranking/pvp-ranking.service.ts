import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PvpRankingService {

  private apiUrl: string = environment.apiUrl
  private url1: string = 'api/pvp-ranking/get-ranking'

  constructor(
    private http: HttpClient,
  ) { }

  getRanking():Promise<any>{
    return lastValueFrom(this.http.get(`${this.apiUrl}${this.url1}`))
  }
}
