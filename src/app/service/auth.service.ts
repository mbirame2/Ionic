import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private headers= new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

  private token=localStorage.getItem('token');
  
  jwt:string;
  username:string;
  roles:string;
  constructor(private httpClient: HttpClient) { }
  PHP_API_SERVER = "api/login";

  
  loginUser(user){
    return this.httpClient.post<any>("http://127.0.0.1:8000/api/login", user,{observe:'response'});
  }
  envoiArgent(user){
    return this.httpClient.post<any>("http://127.0.0.1:8000/api/envoieargent", user,{headers:this.headers,observe:'response'});
  }
  listeTransaction():Observable<any>{
    return this.httpClient.get("http://127.0.0.1:8000/api/listetransactions" ,{headers:this.headers,observe:'response'});

  }
  retirerArgent():Observable<any>{
    return this.httpClient.get("http://127.0.0.1:8000/api/liste_user" ,{headers:this.headers,observe:'response'});
  }
  depotcaissier(user){
    return this.httpClient.post<any>("api/ajout_versement", user,{headers:this.headers,observe:'response'});
  }
  loginPartenaire(user){
    const formData: FormData = new FormData();
    formData.append('imageFile',user.imageFile);
    formData.append('username',user.username);
    formData.append('nomComplet',user.nomComplet);
    formData.append('password',user.password);
    formData.append('adresse',user.adresse);
    formData.append('raisonSocial',user.raisonSocial);
    formData.append('ninea',user.ninea);
    return this.httpClient.post<any>("http://127.0.0.1:8000/api/ajout_partenaire", formData,{headers:this.headers,observe:'response'});
  }
  loginUtilisateur(user){
    const formData: FormData = new FormData();
    formData.append('imageFile',user.imageFile);
    formData.append('nomComplet',user.nomComplet);
    formData.append('password',user.password);
    formData.append('username',user.username);
    return this.httpClient.post<any>("http://127.0.0.1:8000/api/register/userpartenaire" , formData,{headers:this.headers,observe:'response'});
  }
  listeUtilisateur():Observable<any>{
    this.setId(this.headers);
    console.log(this.headers)
    return this.httpClient.get("http://127.0.0.1:8000/api/liste_user" ,{headers:this.headers,observe:'response'});
      
  }
  listePartenaire():Observable<any>{
    this.setId(this.headers);
    console.log(this.headers)
    return this.httpClient.get("http://127.0.0.1:8000/api/liste_partenaire" ,{headers:this.headers,observe:'response'});
      
  }
  
  blok(id):Observable<any>{
    console.log(this.getId())
    return this.httpClient.put("http://127.0.0.1:8000/api/user/bloquer_user/"+id+"",{},{headers:this.getId(),observe:'response'});
  }
  blokpart(id):Observable<any>{
    console.log(this.getId())
    return this.httpClient.put("http://127.0.0.1:8000/api/partenaire/bloquer_partenaire/"+id+"",{},{headers:this.getId(),observe:'response'});
  }
  argent(){
    return this.httpClient.get<any>("http://127.0.0.1:8000/api/argent" ,{headers:this.headers,observe:'response'});  
  }
  listetransaction(){
    return this.httpClient.get<any>("http://127.0.0.1:8000/api/listetransactions" ,{headers:this.headers,observe:'response'});  
  
  }
  fall(){
    return this.headers;
  }
  
testretrait(user){
  return this.httpClient.post<any>("http://127.0.0.1:8000/api/retrait_test", user,{headers:this.headers,observe:'response'});
}
finaliser(user){
  return this.httpClient.post<any>("api/retraitargent", user,{headers:this.headers,observe:'response'});

}
signcaissier(user){

  const formData: FormData = new FormData();
  formData.append('imageFile',user.imageFile);
  formData.append('nomComplet',user.nomComplet);
  formData.append('password',user.password);
  formData.append('username',user.username);
  return this.httpClient.post<any>("api/register/caissier" , formData,{headers:this.headers,observe:'response'});
}
  saveToken(jwt: string){
  localStorage.setItem('token' ,jwt)
  this.jwt=jwt;
  this.parseJWT();
  }
  parseJWT(){
let jwtHelpe = new JwtHelperService();
let jwtObject=jwtHelpe.decodeToken(this.jwt);
this.username=jwtObject.sub;
this.roles=jwtObject.roles[0];

localStorage.setItem('role' ,this.roles)
console.log(this.isAuthenticated());

  }
  deletetoken(){
    localStorage.removeItem('token');
   
  }
  deleterole(){
    localStorage.removeItem('role');
  }
   setRoles(roles)
  {
      this.roles = roles;

      return this.roles;
  }
  setId(headers)
  {
      this.headers = headers;

      return this.headers;
  }
  getId(){
    return this.headers;
  }
  isAuthenticated(){
   
    return this.roles;
  }
  role(){
    return localStorage.getItem('role');
  }
  tokendougna(){
    return this.token;
  }
}
