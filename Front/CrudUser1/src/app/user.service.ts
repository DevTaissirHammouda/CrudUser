import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private _http : HttpClient) { }
getUsers() : Observable<any>{
  return this._http.get('http://localhost:8080/user');
  
}
addUser(data : any ) : Observable<any>{
  return this._http.post('http://localhost:8080/user', data);
}
deleteUser(id : any ) : Observable<any>{
  return this._http.delete(`http://localhost:8080/user/${id}`);
}
updateUser(id:number ,data : any ) : Observable<any>{
  return this._http.put(`http://localhost:8080/user`, data);
}
}