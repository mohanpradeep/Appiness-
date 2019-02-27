import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  test = false;
  logged_user = null;
  constructor() { }

  ngOnInit() {
  }

  onLogin(loginForm) {

    let login_form_value = loginForm.value;
    //console.log(login_form_value);

    let registered_users_data = localStorage.getItem('kk');
    let parsedDataRegistered = JSON.parse(registered_users_data);
    let is_login_success = false;

    console.log(parsedDataRegistered);

      for (let single of parsedDataRegistered) {

        //console.log( login_form_value.user);

        if (single.email == login_form_value.user) {
          console.log("valid user");
          is_login_success = true;
        } else if (single.mobile == login_form_value.user) {
          console.log("valid user");
          is_login_success = true;
        } else if (single.userName == login_form_value.user) {
          console.log("valid user");
          is_login_success = true;
        } else{
          console.log("Invalid user");
          this.test = true;
        }

        if (is_login_success){
          const parsedData = JSON.stringify(single);
          localStorage.setItem('logged_user', parsedData);
        }

      }

  }

}
