import * as S from './titles.style';

interface H6TitleProps {
  text: string;
}

export const H6Title = ({ text }: H6TitleProps): JSX.Element => <S.StyledH6>{text}</S.StyledH6>;
