export interface InfoPagina {
	titulo?: string;
	email?: string;
	nombre_corto?: string;
	equipo_trabajo?: Equipo[];
}


export interface Equipo{
	nombre: string;
	subtitulo: string;
	frase: string;
	url: string;
}

