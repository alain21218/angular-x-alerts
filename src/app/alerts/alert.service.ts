import { Injectable } from '@angular/core';
import { delay } from 'q';

@Injectable()
export class AlertService {

  public alerts = [];

  constructor() { }

  public success(message: string, persist = false) {
    this.show(message, 'success', persist);
  }

  public error(message: string, persist = false) {
    this.show(message, 'error', persist);
  }

  public warn(message: string, persist = false) {
    this.show(message, 'warn', persist);
  }

  public info(message: string, persist = false) {
    this.show(message, 'info', persist);
  }

  public show(content: string, style = 'info', persist = false) {
    const a = { style, content, timeout: null, persist }
    this.alerts.push(a);

    if(!persist) {
        a.timeout = setTimeout(() => {
          this.remove(a);
        }, 5000);
    }
    
  }

  remove(alert: any) {
    clearTimeout(alert.timeout);
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}
