import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaNormalButtonComponent } from './elewa-normal-button/elewa-normal-button.component';
import { TestComponent } from './Componets/test/test.component';
import { ElewaNormalButtonRoutingModule } from './elewa-normal-button/elewa-normal-button-module.routing';

@NgModule({
  imports: [CommonModule, ElewaNormalButtonRoutingModule],
  declarations: [ElewaNormalButtonComponent, TestComponent],
  exports: [ElewaNormalButtonComponent],
})
export class ElementsLayoutButtonsModule {}
