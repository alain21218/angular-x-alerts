import { Component } from '@angular/core';
import { AlertService } from './alerts/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad est aliquid sunt expedita laboriosam !';

  constructor(public alert: AlertService) { }
}
