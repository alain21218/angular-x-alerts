import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlertComponent
  ],
  providers: [AlertService],
  exports: [AlertComponent]
})
export class AlertModule {
  public static forRoot(config?): ModuleWithProviders {
    return {
      ngModule: AlertModule,
      providers: [
        AlertService,
        { provide: 'config', useValue: config }
      ]
    };
  }
}