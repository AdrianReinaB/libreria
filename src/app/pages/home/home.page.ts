import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  libros = [{isbn:9788845292613,titulo:"El Señor de los anillos", autor:"JRR Tolkien"}];
  constructor(private router: Router) {}

  addlibro() {
   console.log('AddLibro');
    this.router.navigate(['addlibro/']);
  }

  logout() {
    console.log('logout');

  
  }
}