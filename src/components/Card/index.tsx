import React from 'react';
import { Wrapper } from './styles';

interface Props {
	date: Date;
	data: string;
	data_time?: string;
	icon: number;
	time: boolean;
	temp?: 'hot' | 'cold' | null;
	description?: string;
	humidity?: number;
}

const Card: React.FC<Props> = ({ date, time, data,data_time, temp, icon, description, humidity }) => {
	const timeString: string = `${date.getHours() < 10 ? 0 : ''}${date.getHours()}:${
		date.getMinutes() < 10 ? 0 : ''
	}${date.getMinutes()}`;

	return (
		<Wrapper>
			<p>
				{date.toDateString().split(' ')[0]} {time ? timeString : ''}{' '}
				{(date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth()) +
					'/' +
					date.getDate()}
			</p>
			<p>{data}</p>
			<p>{data_time}</p>
			<i className={`wi wi-owm-${icon} ${temp && temp}`}></i>
			<p>{description && description}</p>
			<h4>{humidity+'%'}</h4>
		</Wrapper>
	);
};

export default Card;
