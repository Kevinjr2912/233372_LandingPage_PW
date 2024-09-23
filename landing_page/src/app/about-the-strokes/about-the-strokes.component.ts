import { Component } from '@angular/core';

@Component({
  selector: 'app-about-the-strokes',
  templateUrl: './about-the-strokes.component.html',
  styleUrl: './about-the-strokes.component.css'
})
export class AboutTheStrokesComponent {
  images = [
    {
      src: 'https://imgs.search.brave.com/cbEgCeGgnrMDaJKjxOhwFlIWHt38Y8-ObJhFcVQJ0hw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/OTIzOTgyNi9lcy9m/b3RvL3RoZS1zdHJv/a2VzLWp1bGlhbi1j/YXNhYmxhbmNhcy1h/bmNpZW5uZS1iZWxn/aXF1ZS1icnVzc2Vs/LWJlbGdpdW0tMjYt/ZmVicnVhcnktMjAw/Mi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9aWFtX2M5RWNi/NmZDNGl4d1hLYnRX/aUR2b0ZqOXZ2U1pO/X0V1cEtCWkxrYz0',
      name: 'Julian Casablancas'
    },
    {
      src: 'https://imgs.search.brave.com/316PgZzVJNakWdWtU0f1DAefJxwKajYr2Uk4anM6OX4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTky/NTQyMjU5Ni9waG90/by9uZXcteW9yay1u/eS1uaWNrLXZhbGVu/c2ktb2YtdGhlLXN0/cm9rZXMtaXMtcGhv/dG9ncmFwaGVkLWZv/ci1ubWUtbWFnYXpp/bmUtb24tbWFyY2gt/MzAtMjAwNS1pbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/dDAxMnBTMnhWZFU0/d2gxZW5Lem1laWZf/Nmwxbl9QTWFfYjYy/N3RRNEg1Zz0',
      name: 'Nick Valensi'
    },
    {
      src: 'https://imgs.search.brave.com/hQ6naW0-TIt772alY5k4hyP_x5ptJyfaSVFCmEAN0EU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yb3Zp/bXVzaWMucm92aWNv/cnAuY29tL2ltYWdl/LmpwZz9jPUFYdFhG/Yld0MkNSWUFNLWdR/R3F0MkFTaWphWEps/WW5xMFN0MzFxcEFK/V289JmY9NA',
      name: 'Albert Hammond Jr.'
    },
    {
      src: 'https://imgs.search.brave.com/gs46KmJnNpW728oDxbeqjP5bf1xqF5WknrNXW97Ek9A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFhLzdj/Lzg4LzFhN2M4ODll/NmUzZjZkNjc0OGRk/Y2UxOTE5N2I3Yzcy/LmpwZw',
      name: 'Fabrizio Moretti'
    },
    {
      src: 'https://imgs.search.brave.com/yZMmzocl003bRUmWxX7IOCi_wUr_9qKDu1gWmg5S4_E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFlL05pa29sYWlf/RnJhaXR1cmUuanBn',
      name: 'Nikolai Fraiture'
    }
  ]
}
