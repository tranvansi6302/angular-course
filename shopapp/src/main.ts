import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from './app/app.config'
import { HomeComponent } from './app/pages/home/home.component'
import { DetailComponent } from './app/pages/detail/detail.component'
import { RegisterComponent } from './app/pages/register/register.component'
import { LoginComponent } from './app/pages/login/login.component'
// import FormsModule from '@angular/forms'

bootstrapApplication(LoginComponent, appConfig).catch((err) => console.error(err))
