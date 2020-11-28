import { Categoria } from './../categoria.model';
export class Producto {
    id: number
    codigo: string
    nombre: string
    descripcion: string
    precio: number
    valorIva: number
    enable: boolean
    categoria: Categoria
}