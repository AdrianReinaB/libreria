import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Libro } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  libros = [{isbn:9788845292613,titulo:"El Señor de los anillos", autor:"JRR Tolkien"}];
  libro!:Libro[] | undefined
  constructor(private router: Router, private authService: AuthService, private bbdd: FirebaseService, private navCtrl: NavController) {}

  addlibro() {
   console.log('AddLibro');
    this.router.navigate(['addlibro/']);
  }

  ionViewDidEnter(){
    this.bbdd.getLibrosUser(this.authService.getuuid()).subscribe(l=>{
      this.libro=l
      console.log(l)
    })
  }

  detallesLibro(isbn: string){
      this.navCtrl.navigateForward(`/jugador/${this.authService.getuuid()+isbn}`)
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}