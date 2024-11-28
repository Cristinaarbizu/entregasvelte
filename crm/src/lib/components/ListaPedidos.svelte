<!-- src/lib/components/ListaPedidos.svelte -->
<script>
    import { pedidos, eliminarPedido } from '../stores/pedidos';
</script>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    .acciones {
        display: flex;
        gap: 10px;
    }
</style>

<table>
    <thead>
        <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Fecha</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
        {#each $pedidos as pedido (pedido.id)}
            <tr>
                <td>{pedido.nombreProducto}</td>
                <td>{pedido.cantidad}</td>
                <td>{pedido.precio.toFixed(2)}€</td>
                <td>{pedido.total.toFixed(2)}€</td>
                <td>{pedido.fecha}</td>
                <td>
                    <div class="acciones">
                        <button on:click={() => eliminarPedido(pedido.id)}>
                            Eliminar
                        </button>
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>