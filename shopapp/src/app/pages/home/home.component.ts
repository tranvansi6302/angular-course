import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { FooterComponent } from '../footer/footer.component'
import { HeaderComponent } from '../header/header.component'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterOutlet, RouterLink, FooterComponent, HeaderComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {}
