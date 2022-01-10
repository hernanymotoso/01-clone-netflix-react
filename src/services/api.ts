import axios from 'axios';

const apiKey = '5bb48c3d07ec92baee2a3aad33b277da';

const requestLang = 'pt-BR';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export { api, apiKey, requestLang };
