import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss'],
})
export class ReactiveFormDemoComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      mobile:['',Validators.required],
      gender:['1'],
      department:['0',Validators.required],
      address:['',Validators.required],
      confirmPassword:['',[Validators.required,this.matchedConfirmPasswordValidation]],

    });
  }

  matchedConfirmPasswordValidation(fc:FormControl): Validators |null{

    if(fc.value!=='' && fc.value!== fc.parent?.get('password')?.value)
    return {'PasswordNotMatched':true}

    return null;
  }
  get name(){
    return this.userForm.get('name') as FormControl;
  }
  get email(){
    return this.userForm.get('email') as FormControl;
  }

  get password(){
    return this.userForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.userForm.get('confirmPassword') as FormControl;
  }
  get address(){
    return this.userForm.get('address') as FormControl;
  }
  get gender(){
    return this.userForm.get('gender') as FormControl;
  }
  get department(){
    return this.userForm.get('department') as FormControl;
  }
  get mobile(){
    return this.userForm.get('mobile') as FormControl;
  }
  addUser() {
    console.log(this.userForm);
  }
}
