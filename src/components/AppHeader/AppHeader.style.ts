import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppHeaderContainer = styled.div`
  height: 75px;
  background: #333;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const AppHeaderSection = styled.div`
  width: 100%;
  padding: 10px;
`;

export const LinksSection = styled(AppHeaderSection)`
  display: flex;
  justify-content: space-around;
`;

export const AppHeaderTitle = styled.h2``;

export const NavigationLink = styled(Link)`
  min-width: 100px;
  padding: 2px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #666;
  text-decoration: none;
  text-align: center;
  color: #ddd;

  transition: 0.5s;

  &:hover {
    background: #aaa;
    color: #fff;
  }
`;
