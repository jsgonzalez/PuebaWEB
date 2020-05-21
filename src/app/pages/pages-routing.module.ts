import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NewComponent } from './calendario/new/new.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'nuevo', component: NewComponent},
  { path: 'nuevo/:id', component: NewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
