import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vide',
  templateUrl: './vide.page.html',
  styleUrls: ['./vide.page.scss'],
})
export class VidePage implements OnInit {
al:string
bl:string ;cl:string
dl:string; el:string
fl:string; gl:string
hl:string
  constructor() { }
  voir(a,b,c,d,e,f,g,h){
    this.al=a;
    this.bl=b;
    this.cl=c
    this.dl=d;this.el=e;this.gl=g;this.hl=h;
    }
  ngOnInit() {


  }

}
