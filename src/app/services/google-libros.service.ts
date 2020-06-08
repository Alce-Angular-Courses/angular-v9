import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class GoogleLibrosService {
  urlbase: string;
  constructor(public http: HttpClient) { 
    this.urlbase = environment.urlLibros;
  }

  buscar(clave): Promise<Array<Libro>> {
    return this.http.get(this.urlbase + clave)
    .toPromise().then(
      (resp: any) => {
        return resp.items.map( item => {
          return new Libro(
            item.id,
            item.volumeInfo.title,
            item.volumeInfo.authors
          );
        });
      }
    );
  }
}

