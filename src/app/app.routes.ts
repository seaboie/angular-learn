import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PagesComponent } from './components/pages/pages.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SettingsProfileComponent } from './components/settings-profile/settings-profile.component';
import { SettingsProductComponent } from './components/settings-product/settings-product.component';
import { authGuard } from './auth/auth/auth.guard';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'products',
        loadComponent: () => import('./components/products/products.component').then((c) => c.ProductsComponent),
        canActivate: [authGuard]
    },
    {
        path: 'settings',
        component: SettingsComponent,
        children: [
            // {
            //     path: '',
            //     redirectTo: 'profile',
            //     pathMatch: 'full'
            // },
            {
                path: 'profile',
                component: SettingsProfileComponent
            },
            {
                path: 'products',
                component: SettingsProductComponent
            }
        ],
    },
    {
        path: 'pages/:pageId',
        component: PagesComponent
    },
    // Log in
    {
        path: 'login',
        component: LoginComponent
    },
    // Redirect Function
    {
        path: 'old-pages/:pageId',
        redirectTo: (route) => {
            return `/pages/${route.params['pageId']}`
        }
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
