import RNSecureKeyStore, { ACCESSIBLE } from 'react-native-secure-key-store';

export const KEYS = {
	TOKEN: 'token',
	USER: 'user',
};

export const setStorageKey = async (key, value) => {
	return new Promise((resolve, reject) => {
		RNSecureKeyStore.set(key, JSON.stringify(value), { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY }).then(
			() => {
				resolve();
			},
			(error) => {
				reject(error);
			}
		);
	});
};

export const getStorageKey = async (key) => {
	return new Promise((resolve, reject) => {
		RNSecureKeyStore.get(key).then(
			(res) => {
				resolve(JSON.parse(res));
			},
			(error) => {
				reject(error);
			}
		);
	});
};

export const removeStorageKey = async (key) => {
	return new Promise((resolve, reject) => {
		RNSecureKeyStore.remove(key).then(
			() => {
				resolve();
			},
			(error) => {
				reject(error);
			}
		);
	});
};
