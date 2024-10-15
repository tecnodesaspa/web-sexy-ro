import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(page: string = 'N/A', functionName: string = 'N/A', data: any = 'N/A'){
    this.printLog(page, functionName, data, 'LOG')
  }

  warning(page: string = 'N/A', functionName: string = 'N/A', data: any = 'N/A'){
    this.printLog(page, functionName, data, 'WARNING')
  }

  error(page: string = 'N/A', functionName: string = 'N/A', data: any = 'N/A'){
    this.printLog(page, functionName, data, 'ERROR')
  }

  printLog(page: string = 'N/A', functionName: string = 'N/A', data: any = 'N/A', type: 'LOG' | 'WARNING' | 'ERROR') {
    if(environment.debug){
      switch(type){
        case 'LOG':
          console.log('@@@@ Page[',page,'] ---Func[',functionName,'] -->[',data,']');
          break
        case 'WARNING':
          console.warn('@@@@ Page[',page,'] ---Func[',functionName,'] -->[',data,']');
          break
        case 'ERROR':
          console.error('@@@@ Page[',page,'] ---Func[',functionName,'] -->[',data,']');
          break
      }
    }
  }
}
