import { Component } from '@angular/core'
import { HeaderComponent } from '../../pages/header/header.component'
import { FooterComponent } from '../../pages/footer/footer.component'
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {}
