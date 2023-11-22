import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppHeaderContainer = styled.div`
  height: 75px;
  padding: 0 10px;
  background: #333;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const AppHeaderSection = styled.div`
  width: 100%;
`;

export const LinksSection = styled(AppHeaderSection)`
  display: flex;
  justify-content: space-around;
`;

export const AppHeaderTitle = styled.h2``;

export const NavigationLink = styled(Link)`
  width: 75px;
  padding: 2px 5px;
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
