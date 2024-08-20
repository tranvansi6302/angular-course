import { Component } from '@angular/core'
import { HeaderComponent } from '../header/header.component'
import { FooterComponent } from '../footer/footer.component'

@Component({
    selector: 'app-detail',
    standalone: true,
    imports: [HeaderComponent, FooterComponent],
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.scss'
})
export class DetailComponent {}
