import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private _auth: AuthService ) {}
  ngOnInit(){
this._auth.deletetoken();
this._auth.deleterole();
  }
  

}
