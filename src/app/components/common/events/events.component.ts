import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../../../models/interfaces/event.interface';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  @Input() serverDate: Date = new Date()
  @Input() events: IEvent[] = [
    {
      days: 1,
      description: 'WOE 1.0 castillo prtg_cas01',
      endHour: 2200,
      idEvent: 1,
      startHour: 2100,
      title: 'WOE 1.0',
      type: 'woe',
      hour: 'Hoy 20:00 hora server'
    }
  ]
  serverHour: string = ''
  constructor(
  ) { }

  ngOnInit(): void {
    this.setDate()
  }

  setDate(){
    setInterval(() => {
      this.serverDate.setSeconds(this.serverDate.getSeconds() + 1)
      this.serverHour = this.serverDate.toLocaleTimeString()
    }, 1000)
  }
}
