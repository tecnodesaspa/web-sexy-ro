import { Component, OnInit } from '@angular/core';
import { IEvent } from '../../../models/interfaces/event.interface';
import { EventService } from '../../../services/event/event.service';
import { LoggerService } from '../../../services/logger/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  idLog: string = 'HomeComponent'
  events: IEvent[] = []
  serverDate: Date = new Date()
  today:number = new Date().getDay()
  hour: number = new Date().getHours() * 100

  constructor(
    private eventService: EventService,
    private logger: LoggerService
    ) { }

  ngOnInit(): void {
    this.getEvents()
  }

  async getEvents(){
    try {
      this.events = []
      const response = await this.eventService.getEvents()
      this.serverDate = new Date(response.serverDate.split('.')[0])
      this.hour = this.serverDate.getHours() * 100
      this.today = this.serverDate.getDay()
      if(this.today == 0) { // si es domingo
        this.today = 7
      }

      const eventList: IEvent[] = []
      let count: number = 0
      let maxCount = 5

      for await(let ev of response.events){
        if(ev.days.toString().includes(this.today.toString())){
          if((ev.endHour >= this.hour) && count < maxCount){
            let start = ev.startHour.toString()
            let end = ev.endHour.toString()
            let hour = `${start.length > 1 ? `Hoy de ${start.substring(0, start.length-2) + ':' + start.substring(start.length-2)}` : 'Hoy de 00:00'} ${Number(end) - Number(start) > 0 ? ` hasta las ${end.substring(0, end.length-2) + ':' + end.substring(end.length-2)} hora server`  : 'hora server'}`
            eventList.push({...ev, hour})
            count++
          } 
        }
      }

      this.events = eventList.sort((a, b) => {
        return a.startHour - b.startHour
      })

      const secondEventList: IEvent[] = []

      if(eventList.length < maxCount){
        if(this.today == 7){
          for await(let ev of response.events){
            if(ev.days.toString().includes('1')){
              if(count < maxCount){
                let start = ev.startHour.toString()
                let end = ev.endHour.toString()
                let hour = `${start.length > 1 ? `Mañana de ${start.substring(0, start.length-2) + ':' + start.substring(start.length-2)}` : 'Mañana de 00:00'} ${Number(end) - Number(start) > 0 ? ` hasta las ${end.substring(0, end.length-2) + ':' + end.substring(end.length-2)} hora server`  : 'hora server'}`
                secondEventList.push({...ev, hour})
                count++
              }
            }
          }
        } else {
          for await(let ev of response.events){
            if(ev.days.toString().includes((this.today+1).toString())){
              if(count < maxCount){
                let start = ev.startHour.toString()
                let end = ev.endHour.toString()
                let hour = `${start.length > 1 ? `Mañana de ${start.substring(0, start.length-2) + ':' + start.substring(start.length-2)}` : 'Mañana de 00:00'} ${Number(end) - Number(start) > 0 ? ` hasta las ${end.substring(0, end.length-2) + ':' + end.substring(end.length-2)} hora server`  : 'hora server'}`
                secondEventList.push({...ev, hour})
                count++
              }
            }
          }
        }
      }

      const sortSecondEventList = secondEventList.sort((a,b) => {
        return a.startHour - b.startHour
      })

      sortSecondEventList.forEach(x => {
        this.events.push(x)
      })

      this.logger.log(this.idLog, this.getEvents.name, {info: 'Success', response})
     
    } catch (error) {
      this.logger.error(this.idLog, this.getEvents.name, {info: 'Error', error})
    }
  }
}
