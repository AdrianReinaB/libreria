import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentialsLogin!: FormGroup;

  constructor(private fb: FormBuilder,
		private loadingController: LoadingController,
		private alertController: AlertController,
		private authService: AuthService,
		private router: Router) { }

    get emailLog() {
      return this.credentialsLogin.get('emailLog');
    }
  
    get passwordLog() {
      return this.credentialsLogin.get('passwordLog');
    }

  ngOnInit() {
    this.credentialsLogin = this.fb.group({
			emailLog: ['', [Validators.required, Validators.email]],
			passwordLog: ['', [Validators.required, Validators.minLength(6), Validators.pattern('["a-zA-Z0-9"]*')]]
		});
  }

  async login() {
		const loading = await this.loadingController.create();
		await loading.present();

		const user = await this.authService.login(this.credentialsLogin.value.emailLog, this.credentialsLogin.value.passwordLog);
		await loading.dismiss();

		if (user) {
			this.router.navigateByUrl('/home', { replaceUrl: true });
		} else {
			this.showAlert('Mal inicio de sesion', 'Intentalo de nuevo!');
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

	irRegistro(){
		this.router.navigateByUrl('/registro', { replaceUrl: true });
	}
}
