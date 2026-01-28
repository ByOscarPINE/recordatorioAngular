import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Funciones } from '../pages/funciones/funciones';
import { Defers } from '../pages/defers/defers';

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
        path : 'defers',
        component: Defers
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
