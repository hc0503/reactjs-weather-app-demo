export type Weather = {
	description: string;
	icon: number;
	main: {
		temp: number;
		humidity: number;
	};
	wind: {
		speed: number;
	};
	country: string;
	timestamp: number;
	name: string;
};

export type WeatherResponse = {
	weather: Array<{ id: number; description: string }>;
	main: { temp: number; humidity: number };
	wind: { speed: number };
	name: string;
	sys: {
		country: string;
	};
	dt: number;
};
