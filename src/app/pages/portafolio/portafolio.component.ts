import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/producto.interface';
import { tap, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
    
  }

  cargarProductos(){
    
  }

}
