import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { PartnersSectionComponent } from "./partners-section/partners-section.component";



export const PARTNERS_ROUTES: Route[] = [

    {path: "", component: PartnersSectionComponent},

] 

@NgModule({
    imports: [RouterModule.forChild(PARTNERS_ROUTES)],
    exports: [RouterModule]
})

export class PartnersRoutingModule { }