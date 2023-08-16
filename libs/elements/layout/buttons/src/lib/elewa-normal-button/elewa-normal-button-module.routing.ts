import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ElewaNormalButtonComponent } from './elewa-normal-button.component';



export const NORMAL_BUTTON_ROUTES: Route[] = [

  { path: '', component: ElewaNormalButtonComponent },

];

@NgModule({
  imports: [RouterModule.forChild(NORMAL_BUTTON_ROUTES)],
  exports: [RouterModule]
})
export class ElewaNormalButtonRoutingModule { }