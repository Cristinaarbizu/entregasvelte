<!-- src/lib/components/Login.svelte -->
<script>
    import { autenticarUsuario } from "../services/authService";
    import { iniciarSesion } from "../stores/auth";

    let usuario = "";
    let contrasena = "";
    let error = "";

    async function manejarLogin() {
        try {
            const estaAutenticado = await autenticarUsuario(
                usuario,
                contrasena,
            );
            if (estaAutenticado) {
                iniciarSesion();
            } else {
                error = "Credenciales inválidas";
            }
        } catch (err) {
            error = "Error en el inicio de sesión";
        }
    }
</script>

<main>
    <h1>Inicio de Sesión</h1>
    <form on:submit|preventDefault={manejarLogin}>
        <div>
            <label for="usuario"> Usuario:</label>
            <input id="usuario" type="text" bind:value={usuario} required />
        </div>
        <div>
            <label for="contrasena">Contraseña:</label>
            <input
                id="contrasena"
                type="password"
                bind:value={contrasena}
                required
            />
        </div>
        {#if error}
            <p class="error">{error}</p>
        {/if}
        <button type="submit">Iniciar Sesión</button>
    </form>
</main>

<style>
    main {
        max-width: 300px;
        margin: auto;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        background-color: #fff; 
        transition:
            background-color 0.3s,
            color 0.3s; 
    }

    /* Estilos para el modo oscuro */
    :global(.dark) main {
        background-color: #1e1e1e; 
        color: white; 
    }

    form {
        display: flex;
        flex-direction: column;
    }

    input {
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 4px;
        border: solid 1px #ccc;
        transition: border-color 0.3s; 
    }

    input:hover {
        border-color: #007bff; 
    }

    button {
        padding: 10px;
        background-color: #007bff;
        color: white;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s; 
    }

    button:hover {
        background-color: #0056b3; 
    }

    .error {
        color: red;
        text-align: center;
        margin-bottom: 10px;
    }
</style>
