import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, UsersComponent, UserComponent, PagesComponent, PageOneComponent, PageTwoComponent } from './app.component';

export const router: Routes = [
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'users', component: UsersComponent, pathMatch: 'full' },
    { path: 'user/:id', component: UserComponent, pathMatch: 'full' },
    { path: 'user/:id', component: UserComponent, pathMatch: 'full' },
    {
        path: 'pages', component: PagesComponent,
        children: [
            { path: 'page-one', component: PageOneComponent },
            { path: 'page-two', component: PageTwoComponent },
        ]
    }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
