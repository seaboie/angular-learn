import { Routes } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
    { path: 'first-component', component: FirstComponent },
    { path: 'second-component', component: SecondComponent },
    { path: 'user/:id', component: UserComponent }, // User detail route
    { path: '', redirectTo: '/first-component', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent } 
];
