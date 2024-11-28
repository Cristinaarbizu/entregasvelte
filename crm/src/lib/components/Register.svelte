<!-- src/lib/components/Register.svelte -->
<script>
    import { registrarUsuario } from '../stores/auth';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let name = '';
    let email = '';
    let password = '';
    let error = '';

    async function handleRegister() {
        const userData = { name, email, password };
        try {
            await registrarUsuario(userData);
            // Reinicia los campos del formulario
            name = '';
            email = '';
            password = '';
            // Despacha un evento para indicar que se ha registrado exitosamente
            dispatch('registered'); // Esto notificará al componente padre
        } catch (err) {
            error = 'Error al registrar el usuario. Inténtalo de nuevo.';
        }
    }
</script>

<style>
    .form-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        background-color: #f9f9f9;
    }
    h2 {
        text-align: center;
        margin-bottom: 20px;
    }
    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    button {
        width: 100%;
        padding: 10px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #45a049;
    }
    .error {
        color: red;
        text-align: center;
        margin-bottom: 10px;
    }
</style>

<div class="form-container">
    <h2>Registrar Usuario</h2>
    <form on:submit|preventDefault={handleRegister}>
        {#if error}
            <p class="error">{error}</p>
        {/if}
        <input type="text" placeholder="Nombre" bind:value={name} required />
        <input type="email" placeholder="Email" bind:value={email} required />
        <input type="password" placeholder="Contraseña" bind:value={password} required />
        <button type="submit">Registrar</button>
    </form>
</div>