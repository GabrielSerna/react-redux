import axios from "axios";

export default class LoginService{
  login = (email, password, onSuccess, onError) => {
    axios.post('https://reqres.in/api/login', { email, password }).then( function(result) {
    console.log(`Login effettuato con successo:"token`, result.data);
    onSuccess(result.data);
    }, function(error) {
      console.log(`Errore di login:`, error);
      onError(error.response.data);
    } );
  };
};