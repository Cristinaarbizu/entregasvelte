<script>
    import { estaLogueado, cerrarSesion } from "./lib/stores/auth.js";
    import Login from "./lib/components/Login.svelte";
    import Register from "./lib/components/Register.svelte";
    import Dashboard from "./lib/components/Dashboard.svelte";

    let mostrarRegistro = false;
    let modoOscuro = false;

    function toggleRegistro() {
        mostrarRegistro = !mostrarRegistro;
    }

    function toggleModoOscuro() {
        modoOscuro = !modoOscuro;
        document.body.classList.toggle("dark-mode", modoOscuro);
    }
</script>

<main class={modoOscuro ? "dark" : ""}>
    <div class="modo-oscuro" on:click={toggleModoOscuro}>
        {#if modoOscuro}
            <!-- Icono de Sol -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M5.636 18.364l-1.414 1.414m15.364-1.414l-1.414-1.414M5.636 5.636l-1.414-1.414M12 6a6 6 0 100 12 6 6 0 000-12z"
                />
            </svg>
        {:else}
            <!-- Icono de Luna -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21.752 15.002A9.973 9.973 0 0112 22c-5.523 0-10-4.477-10-10a9.973 9.973 0 017.752-9.75A6.001 6.001 0 0012 .998c3.313 0 6 .687 8.248 1.998A9.973 9.973 0 0121.752 15z"
                />
            </svg>
        {/if}
        <span>{modoOscuro ? "Modo Claro" : "Modo Oscuro"}</span>
    </div>

    {#if !$estaLogueado}
        {#if mostrarRegistro}
            <Register on:registered={() => (mostrarRegistro = false)} />
            <button on:click={toggleRegistro}>Volver a Iniciar Sesión</button>
        {:else}
            <Login />
            <button on:click={toggleRegistro}>Registrar</button>
        {/if}
    {:else}
        <nav>
            <button on:click={cerrarSesion}>Cerrar Sesión</button>
        </nav>
        <!-- Pasar modoOscuro como prop al Dashboard -->
        <Dashboard {modoOscuro} />
    {/if}
</main>

<style>
    /* Estilos generales */
</style>
