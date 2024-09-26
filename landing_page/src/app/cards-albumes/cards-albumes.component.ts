import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-albumes',
  templateUrl: './cards-albumes.component.html',
  styleUrl: './cards-albumes.component.css'
})
export class CardsAlbumesComponent {
  @Input() imgSrc: string = ''
  @Input() content: string = ''
  @Input() title: string = ''
  @Input() href: string = ''
  @Input() cardClass: string = ''
}
