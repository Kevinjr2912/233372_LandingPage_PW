import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-reasons',
  templateUrl: './cards-reasons.component.html',
  styleUrl: './cards-reasons.component.css'
})
export class CardsReasonsComponent {
  @Input() imgSrc: string = '';
  @Input() reason: string = '';
}
