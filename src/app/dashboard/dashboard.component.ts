import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  logged_user: any = null;

  constructor() { }

  ngOnInit() {
    let logged_user = localStorage.getItem('logged_user');
    this.logged_user = JSON.parse(logged_user);
    //console.log(logged_user);
  }

}
