import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Libro } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-addlibro',
  templateUrl: './addlibro.page.html',
  styleUrls: ['./addlibro.page.scss'],
})
export class AddlibroPage implements OnInit {

  libros: Libro = {titulo:"El Señor de los anillos", autor:"JRR Tolkien",  editorial:"asd", isbn:"9788845292613", nPaginas:2, anio: 1992, genero:"dh"};
  
  titulo!: string
  autor!: string
  editorial!: string
  isbn!: string
  nPaginas!:number
  anio!: number
  genero!:string

  constructor(private authService: AuthService, private bbdd: FirebaseService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  addlibro() {
    const user= this.authService.getuuid()
    const libro = {titulo:this.titulo, autor:this.autor,  editorial:this.editorial, isbn:this.isbn, nPaginas:this.nPaginas, anio: this.anio, genero:this.genero};
    const id=user?.concat(this.isbn)
    this.bbdd.addLibro(id, libro).then(s=>{
      console.log("Agregado libro")
    })
    this.navCtrl.navigateForward(`/home`)
    
    console.log('addlibro');
  }
}
