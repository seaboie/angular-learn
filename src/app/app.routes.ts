import { Routes } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserComponent } from './pages/user/user.component';
import { ForthComponent } from './pages/forth/forth.component';
import { ThirdComponent } from './pages/third/third.component';

export const routes: Routes = [
    { path: '', component: FirstComponent },
    { path: 'second-component', component: SecondComponent },
    { path: 'forth-component', component: ForthComponent },
    { path: 'third-component', component: ThirdComponent },
    { path: 'user/:id', component: UserComponent },
    { path: '', redirectTo: '/first-component', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent } 
];
