import { AppPage } from './../../e2e/src/app.po';
import { AuthService } from './service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
public appPages 

constructor(
  private platform: Platform,
  private splashScreen: SplashScreen,
  private statusBar: StatusBar,
  private _auth: AuthService
) {
  this.initializeApp();
}

 
ngOnInit(){
  if(this._auth.role()=='ROLE_Partenaire'){
    this.appPages = [
      {
        title: 'Ajout Partenaire',
        url: '/partenaire/ajout-part',
        icon: 'home'
      },
      {
        title: 'Ajout Utilisateur',
        url: '/partenaire/ajout-user',
        icon: 'home'
      },
      {
        title: 'Deconnexion',
        url: '/home',
       
      },
  
    ];
  }else if(this._auth.role()=='ROLE_User'){

    this.appPages = [
      {
        title: 'transaction',
        url: '/transaction',
        icon: 'home'
      },
        {
          title: 'Liste des Transactions',
          url: '/liste-transactions',
          icon: 'list'
        },]
  }else{
    this.appPages = [
      {
        title: 'Home',
        url: '/home',
        icon: 'home'
      },
      {
        title: 'Page de Connection',
        url: '/connexion',
        icon: 'list'
      }
    ];
  }
}




  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
