import React from 'react';
import { Wrapper } from './styles';

const Footer: React.FC = () => {
	return (
		<Wrapper>
			<p>
                {new Date().getFullYear()}
			</p>
		</Wrapper>
	);
};

export default Footer;
