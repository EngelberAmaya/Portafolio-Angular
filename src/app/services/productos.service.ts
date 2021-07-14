import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { environment } from '../../environments/environment';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: any = [];
  productoFiltrado: Producto[] = [];

  constructor(public http: HttpClient) { 
    this.cargarProductos();

  }

  public cargarProductos(){

    return new Promise( (resolve, reject) => {

      this.http.get(`${ url }/productos_idx.json`)
        .subscribe( (resp: Producto) => {
          this.cargando = false;
          this.productos = resp;
          resolve(this.productos);
        });
    })

  }

  getProducto(id: string){
    return this.http.get(`${ url }/productos/${ id }.json`);     
  }

  buscarProducto(termino: string){

    if(this.productos.length === 0){
      // cargar los productos
      this.cargarProductos().then( () => {
        // ejecutar después de tener los productos
        // aplicar filtro
        this.filtrarProductos( termino );
      })
    } else {
       // aplicar filtro 
       this.filtrarProductos( termino );        
    }

  }

  private filtrarProductos(termino: string){
   
    this.productoFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( (prod: any) => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino) >= 0){
        this.productoFiltrado.push(prod);
      }
      
    })
  }

}
