import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule
  ],
  schemas:[
    ComponentsModule
  ]
})
export class PagesModule { }
