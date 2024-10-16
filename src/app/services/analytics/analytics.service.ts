import { Injectable } from '@angular/core';
import { Analytics, AnalyticsCallOptions } from '@angular/fire/analytics';
import { logEvent } from 'firebase/analytics';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(
    private analytics: Analytics,
  ) { 
    this.analytics.app.automaticDataCollectionEnabled = false
  }

  analyticLogEvent(eventName: string, eventParams?: {
    [key: string]: any;
  }, options?: AnalyticsCallOptions){
    logEvent(this.analytics, eventName, eventParams, options);
  }

}
