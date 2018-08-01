import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form_insert_msg: String = '';
  form = new FormGroup({
    f_name: new FormControl('', Validators.required),
    l_name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  }); 
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  singup() {
    console.log(this.form.value);
    console.log('"calling singup function"');
    this.httpClient.post('http://localhost:3000/users_api/login',
      this.form.value)
      .subscribe(
        (data: any) => {
          if (data.length>0) {
            this.form.reset();
            alert( 'Signup successfully !') ;
            window.location.href="/explore.html"
          } else {
            alert('Error while doing signup please try again');
          }
        }
      );
  }

}
