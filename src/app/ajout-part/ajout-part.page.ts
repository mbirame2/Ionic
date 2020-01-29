import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ajout-part',
  templateUrl: './ajout-part.page.html',
  styleUrls: ['./ajout-part.page.scss'],
})
export class AjoutPartPage implements OnInit {

  loginUserData = {imageFile : File = null};
  public toke;
  constructor(private _auth: AuthService ) {}
  ngOnInit() {
  }
  remove(){
    this._auth.deletetoken();
    console.log( this._auth.tokendougna());
    this.toke=this._auth.tokendougna();
     this._auth.setRoles('aukine');
     console.log( this._auth.roles);
  }
  handleFileInput(file: FileList) {
    this.loginUserData.imageFile = file.item(0);
    const reader = new FileReader();
   
    reader.readAsDataURL(this.loginUserData.imageFile);
    
    }
  loginUser(){
    console.log(this.loginUserData)
    this._auth.loginPartenaire(this.loginUserData ).subscribe(
      res => {console.log(res)}
      ,err =>{console.log(err)})
    }

    test(){
      this.toke="gh"
    }
}
