import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthModule } from '../pages/auth/auth.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    AuthModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class ComponentsModule { }
