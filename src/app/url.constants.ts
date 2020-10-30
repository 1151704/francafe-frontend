const getURlBackend = () => {

   let client = `${window.location.protocol}//${window.location.hostname}`
   let portBackend = 8080;

   return `${client}:${portBackend}/`
}

export const REST = getURlBackend();
export const API_REST = REST+"api/";
export const TOKEN = {
   TOKEN_KEY: 'AuthToken',
   USUARIO_KEY: 'AuthUser'
}

