import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-artists',
  templateUrl: './cards-artists.component.html',
  styleUrl: './cards-artists.component.css'
})
export class CardsArtistsComponent {
  @Input() imgSrc: string = ''
  @Input() nameArtist: string = ''
  @Input() infoInfluence: string = ''
}
