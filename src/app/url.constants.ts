const relacionUrls = [
   {client: 'http://localhost:4200', backend: 'http://localhost:8080/'},
   {client: 'https://francafe.herokuapp.com', backend: 'https://francafe-back.herokuapp.com/'},
]

const getURlBackend = () => {
   let client = window.location.origin
   let actual = relacionUrls.filter(item => item.client == client)
   if (actual && actual.length==1) {
      return actual[0].backend
   }
   return client
}

export const REST = getURlBackend();
export const API_REST = REST+"api/";
export const TOKEN = {
   TOKEN_KEY: 'AuthToken',
   USUARIO_KEY: 'AuthUser'
}

