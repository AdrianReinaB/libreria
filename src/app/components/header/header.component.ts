import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  //añadir parametro title
@Input() title!: string;
email: string | undefined = "bernat.costa@iesjulioverne.es"
ruta:string  
constructor(private router:Router, private authServices: AuthService, private bbdd: FirebaseService) { 
    this.ruta = this.router.url
     console.log("ruta "+ this.ruta)
  }

  ngOnInit() {
    this.bbdd.getUsuario(this.authServices.getuuid()).subscribe(s=>{
      this.email=s?.email
      console.log("email "+s?.email)
    })
  }

}
