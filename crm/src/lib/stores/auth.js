import { writable } from 'svelte/store';

//Store verifica si el usuario esta logueado
export const estaLogueado = writable(false);

//Almacena la informacion del usuario
export const usuario = writable(null);

//Funcion de inicio de sesion
export function iniciarSesion(userData) {
    estaLogueado.set(true);
    //Almacena los datos del usuario
    usuario.set(userData);
}

//Funcion de cerrar sesion
export function cerrarSesion() {
    estaLogueado.set(false);

    //Limpia los datos del usuario
    usuario.set(null);
}

//Funcion para registrar un nuevo usuario
export async function registrarUsuario(userData) {
    try{
        console.log('Usuario registrado: ' , userData);

        iniciarSesion(userData);
    }catch(error){
        console.error('Error al registrar al usuario: ',userData);
    }
    
}

