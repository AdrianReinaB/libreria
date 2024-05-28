import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  //añadir parametro title
@Input() title!: string;
email: string = "bernat.costa@iesjulioverne.es"
  constructor() { 
    
  }

  ngOnInit() {}

}
