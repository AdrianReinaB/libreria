import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  credentialsRegister!: FormGroup;

  constructor(private fb: FormBuilder,
		private loadingController: LoadingController,
		private alertController: AlertController,
		private authService: AuthService,
		private router: Router,
    private bbdd: FirebaseService) { }

    get emailReg() {
      return this.credentialsRegister.get('emailReg');
    }
  
    get passwordReg() {
      return this.credentialsRegister.get('passwordReg');
    }

    get password2Reg() {
      return this.credentialsRegister.get('password2Reg');
    }

  ngOnInit() {
    this.credentialsRegister = this.fb.group({
			emailReg: ['', [Validators.required, Validators.email]],
			passwordReg: ['', [Validators.required, Validators.minLength(6), Validators.pattern('["a-zA-Z0-9"]*')]],
      password2Reg: ['', [Validators.required, Validators.minLength(6), Validators.pattern('["a-zA-Z0-9"]*')]]
		});
  }

  async register() {
    var user= null
		///////registro
		const loading = await this.loadingController.create();
		await loading.present();

    if(this.credentialsRegister.value.passwordReg===this.credentialsRegister.value.password2Reg){
      user = await this.authService.register(this.credentialsRegister.value.emailReg, this.credentialsRegister.value.passwordReg);
    }else{
      this.showAlert('Mal registrado', 'Contraseñas no concuerdan');
    }

    if (user?.user.uid != null) {
      this.bbdd.agregarUsuario(user.user.uid, this.credentialsRegister.value.emailReg).then(
        s=>{
          console.log("usuario guardado")
        }
      )
    }
		////////
		await loading.dismiss();

		if (user) {
			this.router.navigateByUrl('/home', { replaceUrl: true });
		} else {
			this.showAlert('Mal registrado', 'Intentalo de nuevo!');
		}
	}

  async showAlert(header: string, message: string) {
		const alert = await this.alertController.create({
			header,
			message,
			buttons: ['OK']
		});
		await alert.present();
	}

  irLogin(){
		this.router.navigateByUrl('/login', { replaceUrl: true });
	}
}
