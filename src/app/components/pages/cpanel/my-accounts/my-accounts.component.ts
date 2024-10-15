import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { IAccount, IRequestRegisterAccount, IRequestUpdateAccount } from '../../../../models/interfaces/user.interfaces';
import { LoggerService } from '../../../../services/logger/logger.service';
import { AlertService } from '../../../../services/alert/alert.service';
import { UserService } from '../../../../services/user/user.service';
import { MustMatch } from '../../../../helpers/must-match.validator';
import { setErrorMessage } from '../../../../helpers/utils';

@Component({
  selector: 'app-my-accounts',
  templateUrl: './my-accounts.component.html',
  styleUrls: ['./my-accounts.component.scss']
})
export class MyAccountsComponent implements OnInit {

  idLog: string = 'MyAccountsComponent'
  modalRef?: BsModalRef;
  isNew: boolean = false;
  submitted: boolean = false;
  accountForm: FormGroup = new FormGroup({})
  accounts: IAccount[] = []
  btnLoad: boolean = false;
  genres: {
    value: string;
    text: string;
  } [] = [
    {
      text: 'Femenino',
      value: 'F'
    },
    {
      text: 'Masculino',
      value: 'M'
    }
  ]
  detailAccount?: IAccount;
  page: number = 1;
  limit: number = 10;
  totalAccounts: number = 0
  selectedAccount?: IAccount
  
  constructor(
    private logger: LoggerService,
    private alertService: AlertService,
    private userService: UserService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.getAccounts()
  }

  get f(){
    return this.accountForm.controls
  }

  async getAccounts(){
    try {
      const response = await this.userService.getAccounts(this.page, this.limit)
      this.accounts = response.logins
      this.totalAccounts = response.totalAccounts
      this.logger.log(this.idLog, this.getAccounts.name, { info: 'Success', response })
    } catch (error) {
      this.logger.error(this.idLog, this.getAccounts.name, { info: 'Error', error })
    }
  }

  openModal(template: TemplateRef<any>, data?: IAccount) {
    this.submitted = false;
    this.isNew = data ? false : true
    this.selectedAccount = data;
    this.setAccountForm(data)
    this.modalRef = this.modalService.show(template);
  }

  openModalDetail(template: TemplateRef<any>, data: IAccount){
    this.detailAccount = data
    this.modalRef = this.modalService.show(template);
  }

  setAccountForm(data?: IAccount){
    const email = JSON.parse(localStorage.getItem('currentUser')!).user.email
    this.accountForm = this.formBuilder.group({
      user: new FormControl({
        value: data?.userid || '',
        disabled: data?.userid ? true : false
      },[Validators.required, Validators.minLength(6)]),
      email: new FormControl({
        value: email,
        disabled: true
      }, [Validators.email, Validators.required]),
      password: ['' ,[Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      genre: [data?.sex || '', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
  }

  async register(values: any){
    this.submitted = true;

    if(this.accountForm.invalid){
      return
    }

    this.btnLoad = true
    try {
      const { genre, password, user } = values
      if(this.isNew){
        const request: IRequestRegisterAccount = {
          userid: user,
          sex: genre,
          user_pass: password,
          last_ip: '127.0.0.1'
        }
        const response = await this.userService.registerAccount(request) 
        this.logger.log(this.idLog, this.register.name, {info: 'Register account - Success', response})
      } else {
        const request: IRequestUpdateAccount = {
          account_id: this.selectedAccount!.account_id,
          genre,
          password
        }
        const response = await this.userService.updateAccount(request) 
        this.logger.log(this.idLog, this.register.name, {info: 'Update account - Success', response})
      }
      this.alertService.toast(`Usuario ${this.isNew ? 'registrado' : 'actualizado'} con éxito`)
      this.setAccountForm()
      this.modalRef?.hide()
      this.getAccounts()
    } catch (error: any) {
      this.logger.error(this.idLog, this.register.name, {info: 'Error', error})
      let msg = setErrorMessage(error)
      this.alertService.alert(msg, 'error')
    } finally {
      this.btnLoad = false
    }
  }  

  changePage(event: PageChangedEvent){
    this.page = event.page
    this.getAccounts()
  }
}
