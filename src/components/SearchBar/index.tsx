import React, { useState } from 'react';
import { Wrapper, Input } from './styles';
import { useHistory } from 'react-router-dom';
import SearchIcon from '../../assets/search.svg';

const SearchBar: React.FC = () => {
	const [query, setQuery] = useState<string>('');
	const history = useHistory();

	const search = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if ((event.key === 'Enter' || event.keyCode === 13) && query !== '') {
			history.push(`/search/${query}`);
			setQuery('');
		}
	};

	return (
		<Wrapper>
			<Input
				placeholder='Search'
				value={query}
				onKeyUp={search}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
			/>
			<img
				src={SearchIcon}
				alt='Search icon'
				onClick={() => {
					if (query !== '') history.push(`/search/${query}`);
				}}
			/>
		</Wrapper>
	);
};

export default SearchBar;
