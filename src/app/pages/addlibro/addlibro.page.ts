import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addlibro',
  templateUrl: './addlibro.page.html',
  styleUrls: ['./addlibro.page.scss'],
})
export class AddlibroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addlibro() {
    console.log('addlibro');
  }
}
