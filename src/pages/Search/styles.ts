import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 85vh;
  padding: 2rem 0rem;
  display: grid;
  row-gap: 3rem;

  h2 {
    text-align: center;
  }

  .main,
  .wind,
  .humidity {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }

  .carousel-arrow {
    background: none;
    border: none;
    align-self: center;
    cursor: pointer;
    padding: 0 !important;

    img {
      width: 48px;
      height: 48px;
    }
  }

  .error {
    display: grid;
    justify-content: center;
    align-items: center;

    h2 {
      text-align: center;
      word-break: break-word;
    }
  }
`;
