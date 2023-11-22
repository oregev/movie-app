import styled from 'styled-components';

export const FavoriteContainer = styled.div`
  width: 200px;
  padding: 5px 10px 10px 10px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 30px rgba(0, 0, 0, 1);
  transition: 0.5s;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div``;

export const ImageContainer = styled.div``;
