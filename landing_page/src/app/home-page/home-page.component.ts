import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  reasons = [
    {
      img: 'https://imgs.search.brave.com/lSHSutfc3di4Lm3CwxEKBmownc9IhwFQLtvwojrfXrM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZGlzY29ncy5jb20v/Y1BYOXVxY00tRHFZ/U3g0RU1YamRGMXpE/cFg4PS9maXQtaW4v/NTAweDM0OC9maWx0/ZXJzOnN0cmlwX2lj/YygpOmZvcm1hdChq/cGVnKTptb2RlX3Jn/YigpOnF1YWxpdHko/OTApL2Rpc2NvZ3Mt/aW1hZ2VzL1ItMzE4/OTk2Ni0xMzIyOTY5/NDQ3LmpwZWcuanBn',
      reason:
        'Su debut Is This It (2001) trajo de vuelta el interés por el rock alternativo',
    },
    {
      img: 'https://imgs.search.brave.com/9MrcFT56CCcurg0CVXscHIGsrY65yVOWij4xuOU1R18/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA1/Mjk5MDExL3Bob3Rv/L25pa29sYWktZnJh/aXR1cmUtbmljay12/YWxlbnNpLWp1bGlh/bi1jYXNhYmxhbmNh/cy1hbmQtYWxiZXJ0/LWhhbW1vbmQtanIt/b2YtdGhlLXN0cm9r/ZXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU1wMF93QjZs/REgweEZMclBPaWhZ/SGQ4ZVh2bXozTWtq/bXA4c19WTzlCWVk9', reason: 'Pioneros de la escena indie de los 2000, inspirando a muchas bandas.'
    },
    {
      img: 'https://imgs.search.brave.com/pqH7-pykG7gJSuGllRen6hpHLppbLxfhuEzbDaNoDVg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEx/MTUzNDM0L3Bob3Rv/L3RoZS1zdHJva2Vz/LWR1cmluZy0xMHRo/LWFubnVhbC1rcm9x/LXdlZW5pZS1yb2Fz/dC1hdC1pcnZpbmUt/bWVhZG93cy1pbi1p/cnZpbmUtY2FsaWZv/cm5pYS11bml0ZWQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVVFc3VSQXpKNHAt/eTRlMTItejhBSlFC/bmVRNHlpOXRNaXIy/dlpiN1ltWDQ9', reason: 'Con su primer álbum, se volvieron una sensación global, marcando el inicio de su legado.'
    }
  ];
}
