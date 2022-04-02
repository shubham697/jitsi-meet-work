import axios from 'axios';
import Config from '../../config';
import { getStorageKey, KEYS, setStorageKey } from './storage';

const platform = Config.isAndroid ? 'Android' : 'iOS';
const factory = new axios.create({
	timeout: 30000,
	baseURL: Config.BASE_URL,
	headers: {
		'App-Key': Config.APP_KEY,
		'X-Requested-With': 'XMLHttpRequest',
		'Content-Type': 'application/json',
		'X-PLATFORM': platform,
	},
});

factory.interceptors.request.use(
	async (config) => {
		try {
			const token = await getStorageKey(KEYS.TOKEN);
			if (!config.headers.Authorization && token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
		} catch (e) {
			//Not logged in
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

factory.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response && error.response.status === 401) {
			//  
		}
		return Promise.reject(error.response ? error.response.data : error);
	}
);

export default factory;
