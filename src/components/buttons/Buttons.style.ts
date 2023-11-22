import styled from 'styled-components';

export const ButtonContainer = styled.div`
  margin-top: 5px;
`;

export const RemoveButton = styled.button`
  padding: 5px;
  border: 1px solid white;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background: #aaa;
  }
`;
