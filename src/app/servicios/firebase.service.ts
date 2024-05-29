import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { Libro, Usuario } from '../interfaces/usuario';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) { }

  getLibrosUser(id: string |null): Observable<Libro[] | undefined> {
    return this.afs.doc<Libro[]>('libros/' + id).valueChanges();
  }

  getLibro(id: string): Observable<Libro | undefined>{
    return this.afs.doc<Libro>('libros/'+id).valueChanges();
  }

  getUsuario(id: string| null): Observable<Usuario | undefined>{
    return this.afs.doc<Usuario>('usuarios/'+id).valueChanges()
  }

  async agregarUsuario(id: string, mail: string): Promise<void> {
    const usuario = { email: mail }
    await this.afs.collection('usuarios').doc(id).set(usuario);
  }

  async addLibro(id: string | undefined, libro:Libro): Promise<void>{
    return this.afs.collection('libros').doc(id).set(libro)
  }

  async borrarLibro(id: string){
    return this.afs.collection('usuarios').doc(id).delete();
  }
}
