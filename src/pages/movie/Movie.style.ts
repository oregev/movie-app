import styled from 'styled-components';

export const MovieContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MovieTitle = styled.h2``;

export const MovieSearch = styled.input`
  width: 300px;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

export const MovieSearchResults = styled.div`
  border: 1px solid #ccc;
  background: #aaa;
  overflow-y: scroll;
`;

export const MovieSearchResultsItem = styled.div`
  padding: 5px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid #777;
  }
`;
