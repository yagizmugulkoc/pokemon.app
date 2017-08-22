import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MoveService {

  constructor(private http: Http) {
  }

  addMove(move) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/addMove', move, {headers: headers})
      .map(res => res.json());
  }

  getAllMoves() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/list/moves', {headers: headers})
      .map(res => res.json());
  }
}
