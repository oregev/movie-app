import * as S from './AppHeader.style';

export const AppHeader = (): JSX.Element => (
  <S.AppHeaderContainer>
    <S.AppHeaderSection>
      <S.AppHeaderTitle>Movie App</S.AppHeaderTitle>
    </S.AppHeaderSection>
    <S.LinksSection>
      <S.NavigationLink to="/movie">Movie</S.NavigationLink>
      <S.NavigationLink to="/favorites">Favorites</S.NavigationLink>
    </S.LinksSection>
  </S.AppHeaderContainer>
);
