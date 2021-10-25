import Local from '../Local/Home'
import axios from 'axios'


export const LoginAdmin = (data) => axios.post(`${Local()}/login`,data);

