import * as S from './DeputyProfileComponent.style';
import { getClubLogo } from '@app/components/apps/DeputyCardComponent/DeputyCardComponent';

export const DeputyProfileComponent = ({
  first_name,
  second_name,
  img_src,
  votesYes,
  votesNo,
  votesAbstain,
  votesAbsent,
}: {
  first_name: string;
  second_name: string;
  img_src: string;
  votesYes: string;
  votesNo: string;
  votesAbstain: string;
  votesAbsent: string;
}) => {
  return (
    <S.Container>
      <div className="row first-row">
        <S.DeputyImageBox>
          <img src={img_src} alt={`${first_name} ${second_name}`} style={{ height: '200px', width: '160px' }} />
        </S.DeputyImageBox>
        <S.DeputyCredibilityBox>
          Wiarygodność
        </S.DeputyCredibilityBox>
        <S.DeputyTrendingBox>
          Trending / Meme
        </S.DeputyTrendingBox>
      </div>
      <div className="row second-row">
        <S.DeputyVotingsBox>
                  <S.DeputyBasicBox style={{ backgroundColor: "green" }}>{votesYes}%</S.DeputyBasicBox>
                  <S.DeputyBasicBox style={{ backgroundColor: "red" }}>{votesNo}%</S.DeputyBasicBox>
                  <S.DeputyBasicBox style={{ backgroundColor: "#e6ac00" }}>{votesAbstain}%</S.DeputyBasicBox>
                  <S.DeputyBasicBox style={{ backgroundColor: "#00b3b3" }}>{votesAbsent}%</S.DeputyBasicBox>
        </S.DeputyVotingsBox>
        <S.DeputyAgreementWithClubsBox>
                  <S.DeputyBasicBox>
                    <img src={getClubLogo("lewica")} alt="" style={{ height: '100%', width: '100%' }} />
                    <p>12%</p>
                  </S.DeputyBasicBox>
                  <S.DeputyBasicBox>
                    <img src={getClubLogo("koalicja")} alt="" style={{ height: '100%', width: '100%' }} />
                    <p>12%</p>
                  </S.DeputyBasicBox>
                  <S.DeputyBasicBox>
                    <img src={getClubLogo("lewica")} alt="" style={{ height: '100%', width: '100%' }} />
                    <p>12%</p>
                  </S.DeputyBasicBox>
                  <S.DeputyBasicBox>
                    <img src={getClubLogo("lewica")} alt="" style={{ height: '100%', width: '100%' }} />
                    <p>12%</p>
                  </S.DeputyBasicBox>
                  <S.DeputyBasicBox>
                    <img src={getClubLogo("lewica")} alt="" style={{ height: '100%', width: '100%' }} />
                    <p>12%</p>
                  </S.DeputyBasicBox>
                  <S.DeputyBasicBox>
                    <img src={getClubLogo("lewica")} alt="" style={{ height: '100%', width: '100%' }} />
                    <p>12%</p>
                  </S.DeputyBasicBox>
                  <S.DeputyBasicBox>
                    <img src={getClubLogo("lewica")} alt="" style={{ height: '100%', width: '100%' }} />
                    <p>12%</p>
                  </S.DeputyBasicBox>
                  <S.DeputyBasicBox>
                    <img src={getClubLogo("lewica")} alt="" style={{ height: '100%', width: '100%' }} />
                    <p>12%</p>
                  </S.DeputyBasicBox>
        </S.DeputyAgreementWithClubsBox>
      </div>
      <div className="row third-row">
        <S.DeputyStatsAndInfoBox>
          {first_name} {second_name}
          
        </S.DeputyStatsAndInfoBox>
        <S.DeputyScandalBox>
          Skandale
        </S.DeputyScandalBox>
      </div>
      <div className="row fourth-row">
        <S.DeputyActsVotedBox>
          Ustawy na które głosował, oznaczane kolorami (zielony - głos na tak, czerwony - na nie, analogia do frekwencji)
        </S.DeputyActsVotedBox>
      </div>
    </S.Container>
  );
};
