import { Routes } from '@angular/router';
import { Dashboard } from './pages/admin/dashboard/dashboard';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { UserDashboard } from './pages/user/user-dashboard/user-dashboard';
import { AdminGuard } from './services/admin-guard';
import { NormalGuard } from './services/normal-guard';

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
        },
        {
            path: 'admin',
            component: Dashboard,
            pathMatch: 'full',
            canActivate: [AdminGuard]
        },
        {
            path: 'user-dashboard',
            component: UserDashboard,
            pathMatch: 'full',
            canActivate: [NormalGuard]
        }
];
