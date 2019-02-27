import { CustomerService } from './../shared/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registered_users = [];
  showSuccesMessage = false;

  constructor( private customerService: CustomerService) { }
  submitted: boolean;

  formControls = this.customerService.form.controls;

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    if (this.customerService.form.valid) {
      this.registered_users.push(this.customerService.form.value);
      const parsedData = JSON.stringify(this.registered_users);
      localStorage.setItem('kk', parsedData);
      this.submitted = false;
      //this.showSuccesMessage = true;
      this.customerService.form.reset();
      setTimeout(() => this.showSuccesMessage = true, 1000);
      setTimeout(() => this.showSuccesMessage = false, 3000);
    }

  }
}
