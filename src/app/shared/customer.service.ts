import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class CustomerService {


  form = new  FormGroup({
    $key : new FormControl(null),
    userName: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    address: new FormControl('', [Validators.required, Validators.minLength(30)]),
  });

}
