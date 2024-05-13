import * as S from './VotingBar.style';

export const VotingBar = ({ quantity, children }: { quantity: number; children: React.ReactNode }) => {
  return (
    <S.Bar style={{ height: `${100 / quantity}%` }}>
      <S.BlackSquare></S.BlackSquare>
      <S.ContentRow style={{ flex: 0.9 }}>{children}</S.ContentRow>
      <S.BlackSquare></S.BlackSquare>
    </S.Bar>
  );
};
