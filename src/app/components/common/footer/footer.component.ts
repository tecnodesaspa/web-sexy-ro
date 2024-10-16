import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../services/analytics/analytics.service';
import { AnalyticsCallOptions } from 'firebase/analytics';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private analyticsService: AnalyticsService,
  ) { }

  ngOnInit(): void {
  }

  logEvent(eventName: string, eventParams?: any, options?: AnalyticsCallOptions){
    this.analyticsService.analyticLogEvent(eventName, eventParams, options)
  }
}
