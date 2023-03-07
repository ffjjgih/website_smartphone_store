import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SignUpRequest} from "../../../commons/request/SignUpRequest";
import {CommonService} from "../../../services/api/common.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/;
  regexUsername = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
  showPassword:boolean = false;
  signUpRequest: SignUpRequest = new SignUpRequest();

  constructor(private formBuilder: FormBuilder, private router: Router, private commonService: CommonService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.signUpRequest.role="BUYER";
    // do signup here
    this.commonService.signUp(this.signUpRequest).subscribe(response => {
      alert("Sign up successfully");
      this.router.navigate(['/login']);
    },error => {
      console.log(error);
    });

  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    const passwordInput = document.getElementById('password')!;
    if (this.showPassword) {
      passwordInput.setAttribute('type', 'text');
    } else {
      passwordInput.setAttribute('type', 'password');
    }
  }
}
