<script>
    import { onMount } from 'svelte';
    import productos from '../data/productos.json';

    export let modoOscuro = false; 

    let listaProductos = [];
    let nuevoProducto = {
        nombre: "",
        categoria: "",
        precio: 0,
        calorias: 0,
        stock: 0,
    };

    // Cargar productos desde localStorage al montar el componente
    onMount(() => {
        const storedProducts = localStorage.getItem('productos');
        if (storedProducts) {
            listaProductos = JSON.parse(storedProducts);
        } else {
            listaProductos = [...productos]; // Cargar desde el JSON si no hay nada en localStorage
            localStorage.setItem('productos', JSON.stringify(listaProductos)); // Guardar en localStorage
        }
    });

    function agregarProducto() {
        if (nuevoProducto.nombre && nuevoProducto.precio > 0) {
            const productoConId = {
                ...nuevoProducto,
                id: Date.now(),
            };
            listaProductos.push(productoConId);

            // Guardar en localStorage
            localStorage.setItem('productos', JSON.stringify(listaProductos));

            // Reiniciar el formulario
            nuevoProducto = {
                nombre: "",
                categoria: "",
                precio: 0,
                calorias: 0,
                stock: 0,
            };
        } else {
            alert("Por favor, completa todos los campos requeridos.");
        }
    }

    function eliminarProducto(id) {
        listaProductos = listaProductos.filter((producto) => producto.id !== id);

        // Actualizar localStorage
        localStorage.setItem('productos', JSON.stringify(listaProductos));
    }
</script>

<div class="dashboard" class:dark={modoOscuro}>
    <h1>Panel de Gestión de Productos</h1>

    <!-- Formulario para añadir nuevos productos -->
    <section class="añadir-producto">
        <h2>Añadir Nuevo Producto</h2>
        <form on:submit|preventDefault={agregarProducto}>
            <label for="nombre">Nombre del Producto</label>
            <input
                id="nombre"
                type="text"
                placeholder="Nombre del Producto"
                bind:value={nuevoProducto.nombre}
                required
            />
            <label for="categoria">Categoría</label>
            <input
                id="categoria"
                type="text"
                placeholder="Categoría"
                bind:value={nuevoProducto.categoria}
                required
            />
            <label for="precio">Precio (€)</label>
            <input
                id="precio"
                type="number"
                placeholder="Precio (€)"
                bind:value={nuevoProducto.precio}
                min="0"
                step="0.01"
                required
            />
            <label for="calorias">Calorías</label>
            <input
                id="calorias"
                type="number"
                placeholder="Calorías"
                bind:value={nuevoProducto.calorias}
                min="0"
                required
            />
            <label for="stock">Stock</label>
            <input
                id="stock"
                type="number"
                placeholder="Stock"
                bind:value={nuevoProducto.stock}
                min="0"
                required
            />
            <button type="submit">Añadir Producto</button>
        </form>
    </section>

    <!-- Lista de productos -->
    <section class="lista-productos">
        <h2>Productos Disponibles</h2>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Calorías</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {#each listaProductos as producto (producto.id)}
                    <tr>
                        <td>{producto.nombre}</td>
                        <td>{producto.categoria}</td>
                        <td>{producto.precio}€</td>
                        <td>{producto.calorias} cal</td>
                        <td>{producto.stock}</td>
                        <td>
                            <button on:click={() => eliminarProducto(producto.id)}>
                                Eliminar
                            </button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </section>
</div>

<style>
    .dashboard {
        max-width: 800px;
        margin: auto;
        padding: 20px;
        transition: background-color 0.3s, color 0.3s;
    }

    .dark {
        background-color: #333;
        color: #fff;
    }

    .dark input,
    .dark button {
        background-color: #444;
        color: #fff;
        border-color: #555;
    }

    .dark table,
    .dark th,
    .dark td {
        border-color: #555;
    }

    .añadir-producto form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
    }

    .añadir-producto input {
        padding: 8px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 4px;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>