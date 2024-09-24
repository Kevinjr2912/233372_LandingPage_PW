import { Component } from '@angular/core';

@Component({
  selector: 'app-discography-page',
  templateUrl: './discography-page.component.html',
  styleUrl: './discography-page.component.css'
})
export class DiscographyPageComponent {
  images = [
    {
      title:'Room on fire',
      image: 'assets/img/roomonfire.jpg',content:'Room On Fire es el segundo álbum de la banda The Strokes. Publicado en octubre de 2003',
      href:'https://open.spotify.com/intl-es/album/3HFbH1loOUbqCyPsLuHLLh?si=qnVgo2fmTIKybicf1m_C4Q'
    },
    {
      title:'The new abnormal',
      image:'assets/img/TheNewAbnormal.jpg',content:'The new abnormal es un álbum, el primer larga duración del grupo en 7 años, desde Comedown machine (2013).',
      href:'https://open.spotify.com/intl-es/album/2xkZV2Hl1Omi8rk2D7t5lN?si=ZBS2uCZrQGi7R--lxOlXIw'
    },
    {
      title:'Angles',
      image:'assets/img/Angles.jpg',
      content:'El cuarto disco de The Strokes, Angles, salió a la venta el 22 de marzo de 2011. Su single debut fue Under Cover Of Darkness.',
      href: 'https://open.spotify.com/intl-es/album/6Jx4cGhWHewTcfKDJKguBQ?si=JNaf_cNcQFqEnPQUwQsrqg'
    },
    {
      title:'Comedown Machine',
      image: 'assets/img/comedown.jpg',
      content:'Es el quinto álbum de estudio de la banda, lanzado dos años después de su último trabajo discográfico "Angles"',
      href: 'https://open.spotify.com/intl-es/album/4WnkQO4xD9ljQooB3VIxCV?si=F2Zev8dzTEG74DlCCwpavQ'
    },
    {
      title:'First Impressions of Earth',image:'assets/img/FirstImpressionsofEarth.jpg',content:'The Strokes rompieron con su rock crudo y sencillo para pasar a unas guitarras mas definidas y unas melodías mas sobresalientes',
      href: 'https://open.spotify.com/intl-es/album/1HQ61my1h3VWp2EBWKlp0n?si=yM8N6Q9xR2qDtuTSQnNzNA'
    },
    {
      title:'The Singles - Volume 01',image:'assets/img/TheSinglesVolume01.jpg',content:'Presenta una producción cuidada que resalta la energía y el estilo característico de The Strokes',
      href:'https://open.spotify.com/intl-es/album/2j5jqlI0NvqlXAy9C740pZ?si=e5NMMZpOQ5GyXJI0uSotaA'
    }
  ]
}
