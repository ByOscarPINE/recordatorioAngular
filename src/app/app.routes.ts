import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Funciones } from '../pages/funciones/funciones';
import { Defers } from '../pages/defers/defers';
import { ReactiveForms } from '../pages/reactiveForms/reactiveForms';
import { Examen } from '../pages/examen/examen';

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
        path : 'formularios-reactivos',
        component: ReactiveForms
    },
    {
        path : 'examen',
        component: Examen
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
