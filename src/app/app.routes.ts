import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';

export const routes: Routes = [
        {
            path: '',
            component: Home,
            pathMatch: 'full'
        },
        {
            path: 'signup',
            component: Signup,
            pathMatch: 'full'
        },
        {
            path: 'login',
            component: Login,
            pathMatch: 'full'
        }
];
