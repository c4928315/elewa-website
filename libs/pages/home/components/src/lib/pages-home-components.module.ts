import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersSectionComponent } from './partners-section/partners-section.component';
import { PartnersRoutingModule } from './partners.routing';

@NgModule({
  imports: [CommonModule, PartnersRoutingModule],
  declarations: [PartnersSectionComponent],
})
export class PagesHomeComponentsModule {}
