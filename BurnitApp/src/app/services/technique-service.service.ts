import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ITechnique } from '../products/technique';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


//David - Service to callfrom http://localhost:3000/techniques


@Injectable()
export class TechniqueServiceService {
  private _techniqueUrl = 'http://localhost:3000/techniques'

  constructor(private _http: HttpClient) {
    }
   getTechniques():Observable<ITechnique[]>{
    
        return this._http.get<ITechnique[]>(this._techniqueUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
      }
    
      private handleError(err:HttpErrorResponse){
        console.log(err.message)
        return Observable.throw(err.message);
}
}