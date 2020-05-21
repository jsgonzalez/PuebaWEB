import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarioModule } from './calendario/calendario.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    HttpClientModule,
    CalendarioModule
  ],
  schemas:[
    ComponentsModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class PagesModule { }
