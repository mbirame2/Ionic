import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  public toke;
  public argent;


  loginUserData = {coderetrait :null,codetransfert:null}
  constructor(private _auth: AuthService){}
   ngOnInit(){
     this._auth.argent().subscribe(
       res => {console.log(res);
         this.argent=res.body;
        },
       err => {console.log(err);
       this.argent=err.error.text;
      })
      var e = document.getElementById('infoEnvoi');
    e.style.display = 'none';
    var r = document.getElementById('infoRetrait');
    r.style.display = 'none';
   }
   remove(){
     this._auth.deletetoken();
     console.log( this._auth.tokendougna());
     this.toke=this._auth.tokendougna();
      this._auth.setRoles('aukine');
      console.log( this._auth.roles);
   }
   showHideEnvoi() {
    var e = document.getElementById('infoEnvoi');
    e.style.display = 'block';

    var r = document.getElementById('infoRetrait');
    r.style.display = 'none';
   
}
showHideRetrait() {
  var e = document.getElementById('infoEnvoi');
  e.style.display = 'none';

  var r = document.getElementById('infoRetrait');
  r.style.display = 'block';
 
}

  loginUser(){
    this._auth.envoiArgent(this.loginUserData ).subscribe(
      res => {console.log(res);
      
     }
      ,err =>{console.log(err)
        if(err.status==200){
          if(err.error.text=="Le solde de votre compte ne vous permet d effectuer une transaction"){
            Swal.fire(
              'Solde Compte insuffisant',
              ''+err.error.text,
              'error'
            )
          }else{
          Swal.fire(
            'Envoi avec succés',
            ''+err.error.text,
            'success'
          )}
        }else{
        Swal.fire(
          'Erreur lors de l enregistrement',
          'Veillez verifier la saisie de vos champs',
          'error'
        )
      }})
    
    }
    loginUsertwo(){
      this._auth.testretrait(this.loginUserData ).subscribe(
        res => {console.log(res) 
          if(res.body.status!="retrait" && res.body.nomcompletReceveur){
            Swal.fire({
         
              type: 'info',
              title: '<h2> Infos Transaction </h2><hr/>',
              html: 
                    '<h5>          Expediteur           </h5>'
                    +'<p> Nom : '+res.body.nomcomplet+'<br>'
                    +'Adresse: '+res.body.adresse+'<br>'
                    +'Téléphone: '+res.body.telephone+'<br>'
                    +'Numéro d\'identification : '+res.body.pieceid+'<br> </p>'
                    +'<h5>        Bénéficiaire          </h5>'
                    +'<p> Nom : '+res.body.nomcompletReceveur+'<br>'
                    +'Code d\'envoi : '+res.body.codeTransfert+'<br>'
                    +'Montant envoyé : '+res.body.montantaverser+'<br>'
                    +'Date envoi : '+res.body.datedelivrance+'</p>',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirmer le retrait'
              
            }).then((result) => {
              if (result.value) {
                Swal.fire(
                'Succés',
                'Transaction éffectué avec succés',
                'success'
               )}
              this.loginUserData.codetransfert=res.body.codeTransfert;
               this.finalisons();
            })
     }else if(res.body.status=="retrait" && res.body.nomcompletReceveur){
      Swal.fire(
        'Erreur lors de l enregistrement',
        'Veillez verifier le code entrée'+
        'NB : Un code de transfert ne peut pas etre utiliser deux fois',
        'error' 
      )}else{
      Swal.fire(
        'Echec ! ',
        'Le code saisi est incorecte. Vérifier à nouveau.',
        'error'
       )
     }
        }
        ,err =>{console.log(err)}
      )
    }
    finalisons(){
      this._auth.finaliser(this.loginUserData).subscribe(
        res => {console.log(res);
  
       }
        ,err =>{console.log(err)}
      )
    }
}
