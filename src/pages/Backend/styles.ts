import styled from 'styled-components';

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 10px;
  list-style: none;

  li {
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 4px;
      padding: 20px;

    p {
        margin-top: 10px;
        float: left;
        color: red;
    }

    a {
        text-decoration: none;
        color: #333;
    }
  }


`;

export const Title = styled.h1`
    color: #fff;
    margin: 20px; 
  
`;