import { Injectable, Inject } from '@angular/core';
import { delay } from 'q';

@Injectable()
export class AlertService {

  public alerts = [];

  constructor(@Inject('config') private config) {
    console.log(config)
  }

  public success(message: string, persist = null) {
    if(persist === null && this.config && this.config.persist && this.config.persist.success) {
      persist = true;
    }

    this.show(message, 'success', persist);
  }

  public error(message: string, persist = null) {
    if(persist === null && this.config && this.config.persist && this.config.persist.error) {
      persist = true;
    }

    this.show(message, 'error', persist);
  }

  public warn(message: string, persist = null) {
    if(persist === null && this.config && this.config.persist && this.config.persist.warn) {
      persist = true;
    }

    this.show(message, 'warn', persist);
  }

  public info(message: string, persist = null) {
    if(persist === null && this.config && this.config.persist && this.config.persist.info) {
      persist = true;
    }
    
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
