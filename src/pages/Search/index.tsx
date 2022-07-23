import React, { useState, useEffect } from 'react';
// @ts-ignore
import Carousel, { consts } from 'react-elastic-carousel';
import { Wrapper } from './styles';
import { Weather, WeatherSearchResponse } from '../../types/weather';
import { Forecast, ForecastResponse } from '../../types/forecast';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import Card from '../../components/Card';
import LeftArrow from '../../assets/left-arrow.svg';
import RightArrow from '../../assets/right-arrow.svg';

const Search: React.FC = () => {
	const [weather, setWeather] = useState<Weather | null>(null);
	const [forecast, setForecast] = useState<Forecast | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');
	const { query } = useParams<{ query: string }>();

	const carouselSettings = {
		pagination: false,
		itemsToShow: 1,
		enableSwipe: true,
		isRTL: false,
		disableArrowsOnEnd: true,
		enableTilt: false,
		renderArrow: ({
			type,
			onClick,
			isEdge
		}: {
			type: string;
			onClick: () => void;
			isEdge: boolean;
		}) => (
			<>
				{type !== consts.PREV ? (
					<button onClick={onClick} disabled={isEdge} type='button' className='carousel-arrow'>
						<img src={RightArrow} alt='Left slider arrow' />
					</button>
				) : (
					<button onClick={onClick} disabled={isEdge} type='button' className='carousel-arrow'>
						<img src={LeftArrow} alt='Right slider arrow' />
					</button>
				)}
			</>
		)
	};

	useEffect(() => {
		(async () => {
			try {
				let weatherRes: Response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
				);
				let weatherResBody: WeatherSearchResponse = await weatherRes.json();
				setWeather({
					description: weatherResBody.weather[0].description,
					icon: weatherResBody.weather[0].id,
					main: weatherResBody.main,
					wind: weatherResBody.wind,
					name: weatherResBody.name,
					country: weatherResBody.sys.country,
					timestamp: weatherResBody.dt
				});
				let coords = weatherResBody.coord;
				let forecastRes: Response = await fetch(
					`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&exclude=minutely&units=metric`
				);
				let forecastResBody: ForecastResponse = await forecastRes.json();
				setForecast({
					daily: forecastResBody.daily
				});
				setLoading(false);
			} catch (err) {
				setLoading(false);
				setError('Could not find any weather data! Try again later');
			}
		})();

		return () => {
			setError('');
			setLoading(true);
		};
	}, [query]);

	return !loading ? (
		<Wrapper>
			{weather && forecast && !error ? (
				<>
					<div className='main'>
						<h2>
							{weather.name}, {weather.country}
						</h2>
						<Card
							date={new Date(weather.timestamp * 1000)}
							time={false}
							data={weather.main.temp + '°C'}
							temp={weather.main.temp > 25 ? 'hot' : weather.main.temp < 20 ? 'cold' : null}
							icon={weather.icon}
							description={weather.description}
							humidity={weather.main.humidity}
						/>
					</div>
					<div className='daily-forecast'>
						<h2>Daily Forecast</h2>
						<Carousel {...carouselSettings}>
							{forecast.daily.map(day => (
								<Card
									key={day.dt}
									date={new Date(day.dt * 1000)}
									time={false}
									data={'min:'+day.temp.min + '°C, mid:' + ((day.temp.min + day.temp.max) / 2).toFixed(2) + '°C, max:' + day.temp.max + '°C'}
									data_time={'morn:'+day.temp.morn + '°C, day:'+day.temp.day + '°C, night:'+day.temp.night + '°C'}
									temp={day.temp.max > 25 ? 'hot' : day.temp.max < 20 ? 'cold' : null}
									humidity={day.humidity}
									icon={day.weather[0].id}
									description={day.weather[0].description}
								/>
							))}
						</Carousel>
					</div>
				</>
			) : (
				<div className='error'>
					<h2>{error}</h2>
				</div>
			)}
		</Wrapper>
	) : (
		<Wrapper>
			<Loader />
		</Wrapper>
	);
};

export default Search;
