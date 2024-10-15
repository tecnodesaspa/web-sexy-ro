import { Component, OnInit } from '@angular/core';
import { PvpRankingService } from '../../../../services/pvp-ranking/pvp-ranking.service';
import { LoggerService } from '../../../../services/logger/logger.service';

@Component({
  selector: 'app-pvp-ranking',
  templateUrl: './pvp-ranking.component.html',
  styleUrls: ['./pvp-ranking.component.scss']
})
export class PvpRankingComponent implements OnInit {

  idLog: string = 'PvpRankingComponent'
  ranking: any[] = []
  load: boolean = false;

  constructor(
    private pvpRankingService: PvpRankingService,
    private logger: LoggerService
  ) { }

  ngOnInit(): void {
    this.getRanking()
  }

  async getRanking(){
    try {
      this.load = true
      const response = await this.pvpRankingService.getRanking()
      this.ranking = response
      this.logger.log(this.idLog, this.getRanking.name, {info: 'Success', response})
    } catch (error) {
      this.logger.error(this.idLog, this.getRanking.name, {info: 'Error', error})
    } finally {
      this.load = false
    }
  }
}
