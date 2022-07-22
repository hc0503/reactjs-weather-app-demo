export type Forecast = {
	daily: Array<{
		dt: number;
		temp: { min: number; max: number; morn: number; day: number; night:number };
		weather: Array<{ id: number; description: string }>;
		humidity: number;
	}>;
};

export type ForecastResponse = {
	daily: Array<{
		dt: number;
		temp: { min: number; max: number; morn: number; day: number; night:number };
		weather: Array<{ id: number; description: string }>;
		humidity: number;
	}>;
};
