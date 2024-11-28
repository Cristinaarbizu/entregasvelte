<!-- src/lib/components/AgregarPedido.svelte -->
<script>
    import { agregarPedido } from '../stores/pedidos';

    let nombreProducto = '';
    let cantidad = 1;
    let precio = 0;

    function handleSubmit() {
        if (nombreProducto && cantidad > 0 && precio >= 0) {
            agregarPedido({
                nombreProducto,
                cantidad,
                precio,
                total: cantidad * precio
            });

            // Reiniciar formulario
            nombreProducto = '';
            cantidad = 1;
            precio = 0;
        }
    }
</script>

<style>
    form {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        margin: 0 auto;
    }
    input, button {
        margin: 10px 0;
        padding: 8px;
    }
</style>

<form on:submit|preventDefault={handleSubmit}>
    <input 
        type="text" 
        placeholder="Nombre del Producto" 
        bind:value={nombreProducto} 
        required 
    />
    <input 
        type="number" 
        placeholder="Cantidad" 
        bind:value={cantidad} 
        min="1" 
        required 
    />
    <input 
        type="number" 
        placeholder="Precio" 
        bind:value={precio} 
        min="0" 
        step="0.01" 
        required 
    />
    <button type="submit">Añadir Pedido</button>
</form>