import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockLibrosService {

  constructor() {}

  getLibros(clave: string): Array<string> {
    return ['Libro 1', 'Libro 2', 'Libro 3'];
  }

  getLibrosAsync(clave: string): Promise<Array<string>> {
     return new Promise( (resolve, reject) => {
      setTimeout(
        () => {
          const data = ['Libro 1', 'Libro 2', 'Libro 3'];
          console.log(data);
          resolve(data);
        }
        , 1000);
     } );




  }
}
