import styled from 'styled-components';

export const Wrapper = styled.nav`
	display: grid;
	grid-template-columns: 1fr 0.7fr;
	align-items: center;
	padding: 0.5rem 0rem;

	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;

		img {
			width: 36px;
			height: 36px;
		}

		h1 {
			margin-left: 0.5rem;
			cursor: pointer;
			justify-self: flex-start;
		}
	}
`;
