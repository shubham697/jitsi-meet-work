import { Platform } from 'react-native';

const local = {
	isAndroid: Platform.OS === 'android',
	BASE_URL: 'http://0.0.0.0:8000/api/',
};

const beta = {
	isAndroid: Platform.OS === 'android',
	BASE_URL: 'http://0.0.0.0:8000/api/',
};

const live = {
	isAndroid: Platform.OS === 'android',
	BASE_URL: 'http://0.0.0.0:8000/api/',
};

export default local;
