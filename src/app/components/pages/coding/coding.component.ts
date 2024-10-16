import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../common/navbar/navbar.component";
import { AnalyticsService } from '../../../services/analytics/analytics.service';
import { AnalyticsCallOptions } from 'firebase/analytics';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrl: './coding.component.scss'
})
export class CodingComponent implements OnInit {

  urlPack: string = 'https://drive.google.com/drive/folders/1gq_OrHwjPC7Ve-qIq2t-OlGIRcDOrWwZ?usp=sharing'
  urlPreRenewal: string = 'https://drive.google.com/file/d/1itwTK_Pmx7bLpRe6Hd81kP0zwWg2Mw9F/view?usp=sharing'
  urlRenewal: string = 'https://drive.google.com/file/d/1_2p6WEg_qZpIRhIvcltsuE-R3LaxRV8I/view?usp=sharing'

  constructor(
    private analyticService: AnalyticsService,
  ){
  }
  
  ngOnInit(): void {
    this.logEvent('enter_on_coding_page')
  }

  logEvent(eventName: string, eventParams?: any, options?: AnalyticsCallOptions){
    this.analyticService.analyticLogEvent(eventName, eventParams, options)
  }

  goToUrl(nameEvent: string, url: string){
    this.logEvent(nameEvent)
    window.location.href = url
  }
}
