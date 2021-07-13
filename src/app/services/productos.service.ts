import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: any;

  constructor(public http: HttpClient) { 
    this.cargarProductos();

  }

  public cargarProductos(){
    this.http.get('https://portafolioangular-b4b56-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Producto) => {
          console.log(resp);
         
          this.productos = resp;

          setTimeout(() => {
             this.cargando = false;
           },2000);

        });
  }
}
