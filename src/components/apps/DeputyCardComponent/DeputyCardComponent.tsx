import { useRef, useState } from 'react';
import * as S from './DeputyCardComponent.style';
import lewicaLogo from 'assets/club_logos/lewica-logo.jpg';
import koalicjaLogo from 'assets/club_logos/koalicja-logo.png';

export const getClubLogo = (club: string): string | undefined => {
  //! TODO: Add more clubs logos
  switch (club) {
    case 'lewica':
      return lewicaLogo;
    case 'koalicja':
      return koalicjaLogo;
    default:
      return undefined;
  }
};

export const DeputyCardComponent = ({ img_src, name, club }: { img_src: string; name: string; club: string }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [position, setPostion] = useState({ x: 0, y: 0 });
  const popupRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseMove = (event: MouseEvent) => {
    event.clientX != 0 && event.clientY != 0;

    const target = event.target as HTMLDivElement;

    const popup_half_width = popupRef.current?.clientWidth / 2;
    const popup_height = popupRef.current?.clientHeight;

    const newX = event.clientX + (event.clientX - target.x < popup_half_width ? popup_half_width : -popup_half_width);
    const newY = event.clientY + (event.clientY - target.y < popup_height ? 0 : -popup_height);

    if (!(isNaN(newX) || isNaN(newY))) {
      setPostion({ x: newX, y: newY });
    }
  };

  return (
    <>
      <S.Card>
        <img
          src={img_src}
          alt=""
          style={{ height: '100%', width: '100%' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        />
        <S.NamePanel>
          <S.Name>{name}</S.Name>
          <S.Logo>
            <img src={getClubLogo(club)} alt="" />
          </S.Logo>
        </S.NamePanel>
      </S.Card>
      {isHovering && (
        <S.Popup ref={popupRef} style={{ left: `${position.x}px`, top: `${position.y}px`, display: 'block' }}>
          <p>{name}</p>
          <p>{club}</p>
        </S.Popup>
      )}
    </>
  );
};
