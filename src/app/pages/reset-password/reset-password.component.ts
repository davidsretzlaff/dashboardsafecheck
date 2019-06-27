import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/domain/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(      
    private router: Router,
    private route: ActivatedRoute, 
    private authService : AuthService) { }
  public userLogin: User = {};
  private loading: any;
  token:any;
  textError :string =""; 
  private success : Boolean;

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
  }
  async reset() {
   
    try {
      this.success = true;
      this.userLogin.token = this.token;
      await this.authService.reset_password(this.userLogin)
    } catch (error) {
      if(!error.status || error.status != 201){
        this.success = false;
        this.textError = error.error.error;
      }
    } finally {
      if(this.success)
        this.router.navigate(['reset-password-success'])
    }
  }
}
