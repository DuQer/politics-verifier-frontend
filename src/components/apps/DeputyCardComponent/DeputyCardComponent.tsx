import { useEffect, useRef, useState } from 'react';
import * as S from './DeputyCardComponent.style';
import { useNavigate } from 'react-router-dom';
import { Deputy } from './interfaces/kybra_hello_world.did';

import lewicaLogo from 'assets/club_logos/lewica-logo.jpg';
import koalicjaLogo from 'assets/club_logos/koalicja-logo.png';

export const getClubLogo = (club: string): string | undefined => {
  return require(`assets/club_logos/${club}-logo.png`).default;
};

type PhotoSource = {
  image_source: string;
};

export const DeputyCardComponent = (deputy: Deputy & PhotoSource) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [position, setPostion] = useState({ x: 0, y: 0 });
  const popupRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const handleClick = () => {
    navigate(`/deputy`, { state: { deputy } });
  };

  return (
    <>
      <S.Card onClick={handleClick}>
        <img
          src={deputy.image_source}
          alt="Image not found!"
          style={{ height: '100%', width: '100%' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        />
        <S.NamePanel>
          <S.Name>{deputy.first_name + ' ' + deputy.last_name}</S.Name>
          <S.Logo>
            <img src={getClubLogo(deputy.club)} alt="Image not found!" />
          </S.Logo>
        </S.NamePanel>
      </S.Card>
      {/* {isHovering && (
        <S.Popup ref={popupRef} style={{ left: `${position.x}px`, top: `${position.y}px`, display: 'block' }}>
          <p>{deputy.}</p>
          <p>{club}</p>
        </S.Popup>
      )} */}
    </>
  );
};
