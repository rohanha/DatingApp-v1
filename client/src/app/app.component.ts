import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  param = 'this is the test page for my fist angular project, it has basic working template'

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getUsers();    
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error=> console.log(error)
    })
  }

  getUser(){
    this.http.get('https://localhost:5001/api/users').subscribe(response =>{
      this.users = response;
    }, error => {
      console.log(error);
    })
  }

}
