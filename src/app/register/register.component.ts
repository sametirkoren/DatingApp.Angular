import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomeComponent : any;
  @Output() cancelRegister = new EventEmitter();
  model : any = {};
  registerForm : FormGroup;
  constructor( private accountService : AccountService , private toastr : ToastrService) { }

  ngOnInit(): void {
    this.inititializeForm();
  }




  inititializeForm(){
    this.registerForm = new FormGroup({
      username  : new FormControl(),
      password : new FormControl(),
      confirmPassword : new FormControl()
    })
  }

  register(){
    console.log(this.registerForm.value)
    // this.accountService.register(this.model).subscribe(response=>{
    //   console.log(response);
    //   this.cancel();
    // },error=>{
    //   this.toastr.error(error.error);
    // })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
