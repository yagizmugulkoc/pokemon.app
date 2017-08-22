import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class TypeService {

  constructor(private http: Http) {
  }

  getTypes() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/list/types', {headers: headers})
      .map(res => res.json());
  }

  getTypeByName(typeName) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/type/' + typeName, {headers: headers})
      .map(res => res.json());
  }

  getPokemonsWithSort(name, sort) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = 'http://localhost:3000/list?type=';
    if (name != undefined)
      url = url + name;
    else
      url = url + '&sortby=';
    if (sort != undefined)
      url = url + sort;
    return this.http.get(url, {headers: headers})
      .map(res => res.json());
  }

  addType(type) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/addType', type, {headers: headers})
      .map(res => res.json());
  }
}
