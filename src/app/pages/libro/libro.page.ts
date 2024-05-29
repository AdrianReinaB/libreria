import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {
  ruta!: string
  libro!: Libro |undefined
  constructor(private authService: AuthService, private bbdd: FirebaseService, private router:Router) {
    this.ruta = this.router.url
    
    if(this.ruta.includes("/libro")){
      this.ruta=this.ruta.substring(this.ruta.indexOf("/libro/"))
      console.log(this.ruta)
    }
   }
  
  ngOnInit() {
    this.bbdd.getLibro(this.ruta).subscribe(l=>{
      this.libro=l
    })
  }

  deletelibro() {
    this.bbdd.borrarLibro(this.ruta).then(s=>{
      console.log(s)
    })
    console.log('deletelibro');
  }
}
