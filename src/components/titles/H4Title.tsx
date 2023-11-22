import * as S from './titles.style';

interface H4TitleProps {
  text: string;
}

export const H4Title = ({ text }: H4TitleProps): JSX.Element => <S.StyledH4>{text}</S.StyledH4>;
