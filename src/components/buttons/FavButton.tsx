import * as S from './Buttons.style';

interface FavButtonProps {
  title: string;
  onClick: () => void;
}

export const FavButton = ({ title, onClick }: FavButtonProps): JSX.Element => (
  <S.ButtonContainer>
    <S.RemoveButton onClick={onClick}>{title}</S.RemoveButton>
  </S.ButtonContainer>
);
