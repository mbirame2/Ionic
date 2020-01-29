//import { VidePage } from './../vide/vide.page';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { trans } from './trans'
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-transactions',
  templateUrl: './liste-transactions.page.html',
  styleUrls: ['./liste-transactions.page.scss'],
})
export class ListeTransactionsPage implements OnInit {

  constructor(private _auth: AuthService , private router:Router){}  
 

  trans:trans[];

  ngOnInit() {
    this._auth.listeTransaction()
    .subscribe(
      res=>
      {this.trans = res.body ;console.log(this.trans)
        console.log(res)
      } ,
      
      error => console.log(error.body)
      )
      
  }
  showHideEnvoi() {
    var e = document.getElementById('one');
    e.style.display = 'block';

    var r = document.getElementById('two');
    r.style.display = 'none';
   
}
showHideRetrait() {
  var e = document.getElementById('one');
  e.style.display = 'none';

  var r = document.getElementById('two');
  r.style.display = 'block';
 
}


}
