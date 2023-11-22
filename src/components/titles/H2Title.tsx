import * as S from './titles.style';

interface H2TitleProps {
  text: string;
}

export const H2Title = ({ text }: H2TitleProps): JSX.Element => <S.StyledH2>{text}</S.StyledH2>;
