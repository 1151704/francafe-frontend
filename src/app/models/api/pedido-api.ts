import { ClienteApi } from './cliente-api';
import { DetallePedidoApi } from './detalle-pedido-api';
export class PedidoApi {

    detalles: DetallePedidoApi[]
    cliente: ClienteApi
    valorNeto: number
    valorIva: number
    valorTotal: number 
    idFormaPago: number

}