import { Empresa } from './empresa.model';
import { Rol } from './rol.model';
import { TipoIdentificacion } from './tipoIdentificacion.model';
export class Usuario {
    nombres: string;
    apellidos: string;
    email: string;
    identificacion: string;
    username: string;
    fechaRegistro: string;
    enable: boolean;
    tipoId: TipoIdentificacion;
    rol: Rol;
    empresa: Empresa;
  }