import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';


export const ELEWA_WEBSITE_ROUTES: Route[] = [
  // { path: '*', redirectTo: 'home', pathMatch: 'full' },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: () => import('@elewa-website/features/pages/home').then(m => m.FeaturesPagesHomeModule) },

  { path: 'about', loadChildren: () => import('@elewa-website/features/pages/about').then(m => m.FeaturesPagesAboutModule) },

  { path: 'partners', loadChildren: () => import('@elewa-website/pages/home/components').then(m => m.PagesHomeComponentsModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ELEWA_WEBSITE_ROUTES,
      {
        scrollPositionRestoration: 'enabled',
        enableTracing: true,
        onSameUrlNavigation: 'reload'
      },
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
