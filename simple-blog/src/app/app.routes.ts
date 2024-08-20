import { Routes } from '@angular/router'
import { PATH } from './core/constants/path'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/auth/login/login.component'
import { RegisterComponent } from './pages/auth/register/register.component'

export const routes: Routes = [
    {
        path: PATH.HOME,
        component: HomeComponent,
    },
    {
        path: PATH.LOGIN,
        component: LoginComponent,
    },
    {
        path: PATH.REGISTER,
        component: RegisterComponent,
    },
]
