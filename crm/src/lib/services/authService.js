export async function autenticarUsuario(usuario, contrasena) {
    // Simula una llamada a API
    return new Promise((resolve) => {
        setTimeout(() => {
            // Aquí iría la lógica real de autenticación
            resolve(usuario === 'admin' && contrasena === 'admin');
        }, 1000);
    });
}