export function obtenerProductos() {
    return [
        { id: 1, nombre: 'Ensalada César', precio: 8.99, stock: 50 },
        { id: 2, nombre: 'Batido Verde', precio: 5.99, stock: 30 },
        { id: 3, nombre: 'Bowl de Quinoa', precio: 10.99, stock: 25 },
    ];
}

export function obtenerPedidos() {
    return [
        { id: 1, cliente: 'Juan Pérez', items: ['Ensalada César', 'Batido Verde'], total: 14.98 },
        { id: 2, cliente: 'María García', items: ['Bowl de Quinoa'], total: 10.99 },
    ];
}