// src/stores/pedidos.js
import { writable } from 'svelte/store';

export const pedidos = writable([]);

export function agregarPedido(pedido) {
    pedidos.update(listaPedidos => [...listaPedidos, {
        ...pedido,
        id: Date.now(), // Identificador único
        fecha: new Date().toLocaleDateString()
    }]);
}

export function eliminarPedido(id) {
    pedidos.update(listaPedidos => 
        listaPedidos.filter(pedido => pedido.id !== id)
    );
}