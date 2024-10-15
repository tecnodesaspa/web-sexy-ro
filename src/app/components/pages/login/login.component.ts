import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { setErrorMessage } from '../../../helpers/utils'
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { AlertService } from '../../../services/alert/alert.service';
import { LoggerService } from '../../../services/logger/logger.service';
import { IRequestLoginUser } from '../../../models/interfaces/user.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  idLog: string = 'LoginComponent'
  loginForm: FormGroup = new FormGroup({})
  submitted: boolean = false;
  btnLoad: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertService: AlertService,
    private logger: LoggerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clearForm()
  }

  get f(){
    return this.loginForm.controls
  }

  clearForm(){
    this.submitted = false;
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['' ,[Validators.required, Validators.minLength(8)]],
    })
  }

  async login(values: any){
    this.submitted = true;

    if(this.loginForm.invalid){
      return
    }

    this.btnLoad = true
    try {
      const { email, password } = values
      const request: IRequestLoginUser = {
        email,
        password,
      }
      const response = await this.userService.login(request) 
      this.logger.log(this.idLog, this.login.name, {info: 'Success', response})
      this.alertService.toast('Usuario autenticado')
      this.clearForm()
      localStorage.setItem('currentUser', JSON.stringify(response.data))
      this.router.navigate(['/'])
    } catch (error: any) {
      this.logger.error(this.idLog, this.login.name, {info: 'Error', error})
      let msg = setErrorMessage(error)
      this.alertService.alert(msg, 'error')
    } finally {
      this.btnLoad = false
    }
  }  

}
