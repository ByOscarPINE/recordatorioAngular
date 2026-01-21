import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Funciones } from '../pages/funciones/funciones';

export const routes: Routes = [
    {
        path : 'home',
        component: Home
    },
        {
        path : 'funciones',
        component: Funciones
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
