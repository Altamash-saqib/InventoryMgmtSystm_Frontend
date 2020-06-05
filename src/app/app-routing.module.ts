import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditemComponent } from './additem/additem.component';
import { ShowitemComponent } from './showitem/showitem.component';


const routes: Routes = [
  {path:'additem', component: AdditemComponent },
  {path: 'showitem',component: ShowitemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AdditemComponent,ShowitemComponent]