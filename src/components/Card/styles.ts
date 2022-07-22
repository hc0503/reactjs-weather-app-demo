import styled from 'styled-components';

export const Wrapper = styled.div`
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
	display: grid;
	grid-template-rows: auto;
	row-gap: 0.5rem;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 400px;
	padding: 1rem;
	margin: 1rem 0rem;
	word-wrap: break-word;

	i {
		font-size: 5rem;
	}

	.cold {
		color: #429bb8;
	}

	.hot {
		color: #ff4500;
	}
`;
