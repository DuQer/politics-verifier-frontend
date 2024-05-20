import { useLocation } from 'react-router-dom';
import * as S from './DeputyProfileComponent.style';
import { getClubLogo } from '@app/components/apps/DeputyCardComponent/DeputyCardComponent';
import { Deputy } from '../DeputyCardComponent/interfaces/kybra_hello_world.did';

type DeputyProfileProps = {
  first_name: string;
  second_name: string;
  img_src: string;
  votesYes: string;
  votesNo: string;
  votesAbstain: string;
  votesAbsent: string;
};

type PhotoSource = {
  image_source: string;
};

export const DeputyProfileComponent = () => {
  const location = useLocation();
  const deputy: Deputy & PhotoSource = location.state?.deputy;
  return (
    <S.Container>
      <div className="row first-row">
        <S.DeputyImageBox>
          <img src={deputy.image_source} alt="Image not found!" style={{ height: '200px', width: '160px' }} />
        </S.DeputyImageBox>
        <S.DeputyCredibilityBox>Wiarygodność: {deputy.club}</S.DeputyCredibilityBox>
        <S.DeputyTrendingBox>Trending / Meme</S.DeputyTrendingBox>
      </div>
      <div className="row second-row">
        <S.DeputyVotingsBox>
          <S.DeputyBasicBox style={{ backgroundColor: 'green' }}>10%</S.DeputyBasicBox>
          <S.DeputyBasicBox style={{ backgroundColor: 'red' }}>27%</S.DeputyBasicBox>
          <S.DeputyBasicBox style={{ backgroundColor: '#e6ac00' }}>84%</S.DeputyBasicBox>
          <S.DeputyBasicBox style={{ backgroundColor: '#00b3b3' }}>54%</S.DeputyBasicBox>
        </S.DeputyVotingsBox>
        <S.DeputyAgreementWithClubsBox>
          <S.DeputyBasicBox>
            <img src={getClubLogo('lewica')} alt="" style={{ height: '100%', width: '100%' }} />
            <p>12%</p>
          </S.DeputyBasicBox>
          <S.DeputyBasicBox>
            <img src={getClubLogo('koalicja')} alt="" style={{ height: '100%', width: '100%' }} />
            <p>12%</p>
          </S.DeputyBasicBox>
          <S.DeputyBasicBox>
            <img src={getClubLogo('lewica')} alt="" style={{ height: '100%', width: '100%' }} />
            <p>12%</p>
          </S.DeputyBasicBox>
          <S.DeputyBasicBox>
            <img src={getClubLogo('lewica')} alt="" style={{ height: '100%', width: '100%' }} />
            <p>12%</p>
          </S.DeputyBasicBox>
          <S.DeputyBasicBox>
            <img src={getClubLogo('lewica')} alt="" style={{ height: '100%', width: '100%' }} />
            <p>12%</p>
          </S.DeputyBasicBox>
          <S.DeputyBasicBox>
            <img src={getClubLogo('lewica')} alt="" style={{ height: '100%', width: '100%' }} />
            <p>12%</p>
          </S.DeputyBasicBox>
          <S.DeputyBasicBox>
            <img src={getClubLogo('lewica')} alt="" style={{ height: '100%', width: '100%' }} />
            <p>12%</p>
          </S.DeputyBasicBox>
          <S.DeputyBasicBox>
            <img src={getClubLogo('lewica')} alt="" style={{ height: '100%', width: '100%' }} />
            <p>12%</p>
          </S.DeputyBasicBox>
        </S.DeputyAgreementWithClubsBox>
      </div>
      <div className="row third-row">
        <S.DeputyStatsAndInfoBox>
          {deputy.first_name} {deputy.last_name}
        </S.DeputyStatsAndInfoBox>
        <S.DeputyScandalBox>Skandale</S.DeputyScandalBox>
      </div>
      <div className="row fourth-row">
        <S.DeputyActsVotedBox>
          Ustawy na które głosował, oznaczane kolorami (zielony - głos na tak, czerwony - na nie, analogia do
          frekwencji)
        </S.DeputyActsVotedBox>
      </div>
    </S.Container>
  );
};
