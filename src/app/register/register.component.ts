import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form_insert_msg: String = '';
  usersList: any;
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
    this.httpClient.post('http://localhost:3000/users_api/insert',
      this.form.value)
      .subscribe(
        (data: any) => {
          if (data.ok) {
            this.form.reset();
            this.form_insert_msg = 'Signup successfully !';
          } else {
            this.form_insert_msg = 'Error while doing signup please try again';
          }
        }
      );
  }


}
