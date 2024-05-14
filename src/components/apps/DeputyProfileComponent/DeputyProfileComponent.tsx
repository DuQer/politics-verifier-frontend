import * as S from './DeputyProfileComponent.style';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';


export const DeputyProfileComponent = ({firstName, img_src, votesYes, votesNo, votesAbstain, votesAbsent}: { firstName: string, img_src: string, votesYes: string, votesNo: string, votesAbstain: string, votesAbsent: string; }) => {
  
  return (
    <>
        <BaseRow>

          <BaseCol>
            <S.DeputyImageBox>
            <img
              src={img_src}
              alt=""
              style={{ height: '100%', width: '100%' }}
            />
            </S.DeputyImageBox>
          </BaseCol>

          <BaseCol>
            <BaseRow>
              <S.DeputyCredibilityBox>
                Wiarygodnosc
              </S.DeputyCredibilityBox>
            </BaseRow>
            
            <BaseRow>
              <S.DeputyTrendingBox>
                Trending / Meme
              </S.DeputyTrendingBox>
            </BaseRow>
            

            <BaseRow style={{ display: 'flex' }}>
              <S.DeputyVotingsBox>
                <S.DeputyBasicBox style={{ backgroundColor: "green" }}>{votesYes}%</S.DeputyBasicBox>
                <S.DeputyBasicBox style={{ backgroundColor: "red" }}>{votesNo}%</S.DeputyBasicBox>
                <S.DeputyBasicBox style={{ backgroundColor: "#e6ac00" }}>{votesAbstain}%</S.DeputyBasicBox>
                <S.DeputyBasicBox style={{ backgroundColor: "#00b3b3" }}>{votesAbsent}%</S.DeputyBasicBox>
              </S.DeputyVotingsBox>
              <S.DeputyAgreementWithClubsBox  style={{ marginLeft: 'auto' }}> 
                <S.DeputyBasicBox style={{ backgroundColor: "green" }}></S.DeputyBasicBox>
                <S.DeputyBasicBox style={{ backgroundColor: "green" }}></S.DeputyBasicBox>
                <S.DeputyBasicBox style={{ backgroundColor: "green" }}></S.DeputyBasicBox>
                <S.DeputyBasicBox style={{ backgroundColor: "green" }}></S.DeputyBasicBox>
                <S.DeputyBasicBox style={{ backgroundColor: "green" }}></S.DeputyBasicBox>
                <S.DeputyBasicBox style={{ backgroundColor: "green" }}></S.DeputyBasicBox>
                <S.DeputyBasicBox style={{ backgroundColor: "green" }}></S.DeputyBasicBox>
              </S.DeputyAgreementWithClubsBox>
            </BaseRow>

            <BaseRow style={{ display: 'flex' }}>
              <S.DeputyStatsBox>
                <p>{firstName}</p>
              </S.DeputyStatsBox>
              <S.DeputyScandalBox style={{ marginLeft: 'auto' }}>
                Afery
              </S.DeputyScandalBox>
            </BaseRow>
            
          </BaseCol>
  
        </BaseRow>
        
    </>
  );
};
