import { Injectable } from '@angular/core';
import { Http , Response  } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/AlbumStorePage.json';
  constructor(private _http: Http) { }

  getAlbum(){
    this._http.get(this._albumUrl).pipe(map((response: Response) => 
    response.json));
  }

}
