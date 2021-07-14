import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina, Equipo } from '../interfaces/info-pagina.interface';
import { environment } from '../../environments/environment';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  }


  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        
      });
  }

  private cargarEquipo(){
    this.http.get(`${ url }/equipo.json`)
      .subscribe( (resp: any) => {       
        this.equipo = resp;        
      });
  }
}
