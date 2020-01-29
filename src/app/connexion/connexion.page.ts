import { AuthService } from './../service/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit  {
  loginUserData = {}
 
  constructor(private _auth: AuthService , private router:Router){

  }

  ngOnInit(){
this._auth.deleterole();
  }
  isAuthenticated(){
  
    return this._auth.isAuthenticated();
}

 loginUser(){
   this._auth.loginUser(this.loginUserData ).subscribe(
     res => { console.log(res);
  this._auth.saveToken(res.body.token);
 
  if(this.isAuthenticated()=='ROLE_User'){
    this.router.navigate(['/transaction'])
    }
    if(this.isAuthenticated()=='ROLE_AdminWari'){
      this.router.navigate(["/ajout_partenaire"])

      }
      if(this.isAuthenticated()=='ROLE_Caissier'){
        this.router.navigate(["/depot_caissier"])

        }
        if(this.isAuthenticated()=='ROLE_Partenaire'){
          this.router.navigate(["/partenaire/ajout-part"])

          } }
    
    
     ,err =>{console.log(err)
      
  }
   )
 }
 
}
