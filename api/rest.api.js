import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

const jar = new CookieJar();
const api = wrapper(axios.create({ 
     baseURL: 'https://api.coinmarketcap.com/', 
     withCredentials: true,
     jar: jar
}));

export default api;