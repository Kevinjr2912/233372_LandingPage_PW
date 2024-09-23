import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-members',
  templateUrl: './cards-members.component.html',
  styleUrl: './cards-members.component.css'
})
export class CardsMembersComponent {
  @Input() imgSrc: string = '';
  @Input() nameMember: string = '';
}
