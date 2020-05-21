import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NewComponent } from './new/new.component';
import { CalendarioService } from './calendario.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ComponentsModule } from '../../components/components.module';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { dateCustomPipe } from './new.pipe';

registerLocaleData(localeES, 'es');

@NgModule({
  declarations: [NewComponent, dateCustomPipe],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers:[
    { provide: LOCALE_ID, useValue: 'es' },
    CalendarioService,
    DatePipe
  ]
})
export class CalendarioModule { }
