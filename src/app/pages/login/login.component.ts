import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/services/domain/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private authService : AuthService,
    private router: Router
  ) {}
  public userLogin: User = {};
  
  ngOnInit() {
  }
  ngOnDestroy() {
  }
  async login() {

    try {
      await this.authService.login(this.userLogin)
    } catch (error) {
    console.log(error.error.error)
    } finally {
      this.router.navigate(['dashboard'])
    }
  }
}
