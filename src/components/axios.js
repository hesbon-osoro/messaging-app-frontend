import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://messaging-app-back-end.herokuapp.com',
});

export default instance;
