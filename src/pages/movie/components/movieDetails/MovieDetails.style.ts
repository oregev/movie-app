import styled from 'styled-components';

export const MovieContainer = styled.div`
  min-width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  text-decoration: underline;
  text-align: center;
`;

export const MovieDetailsContainer = styled.div`
  margin-bottom: 10px;
`;

export const MovieDetailsTitle = styled.h4``;

export const MovieDetails = styled.p`
  padding-left: 10px;
`;

export const MovieImageContainer = styled.div`
  position: relative;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FavIconContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 100px;
`;

export const FavButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
