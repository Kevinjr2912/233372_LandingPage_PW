import { Component } from '@angular/core';

@Component({
  selector: 'app-influence-page',
  templateUrl: './influence-page.component.html',
  styleUrl: './influence-page.component.css'
})
export class InfluencePageComponent {
  artists = [
    {
      name: 'The Doors',
      content: 'Inspiración musical más fuerte, sobre todo en lo que hace a su forma de componer y proponer canciones. ',
      img: 'assets/img/TheDoors.jpg'
    },
    {
      name: 'Pearl Jam',
      content: 'Para el líder de The Strokes, escuchar el clásico track Yellow Ledbetter lo motivó a iniciarse en la música.',
      img: 'assets/img/PearlJam.jpg'
    },
    {
      name: 'Sonic Youth',
      content: 'Julian Casablancas comentó que para la cancion 12.51, su banda “tomó prestadas” ideas de la canción Bull in the Heather',
      img: 'assets/img/SonicYouth.jpg'
    },
    {
      name: 'The Velvet Underground',
      content: 'Su influencia puede escucharse en los frenéticos estilos rítmicos motorik, especialmente marcados por la batería',
      img: 'assets/img/TheVelvetUnderground.jpg'
    },
    {
      name: 'Cyndi Lauper',
      content: 'Inspiración por su estética punk y sensibilidad pop tan características',
      img: 'assets/img/CyndiLauper.jpg'
    }
  ]
}
