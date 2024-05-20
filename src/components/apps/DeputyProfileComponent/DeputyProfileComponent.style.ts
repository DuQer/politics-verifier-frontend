import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import styled from 'styled-components';

const mainMargin = '5px';
const mainPadding = '15px';
const mainColor = 'rgba(43, 46, 82, 0.5)'

export const DeputyBasicBox = styled.div`
  width: 50px;
  height: 50px;
  margin: ${mainMargin};
  text-align: center;
  align-content: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    padding: 5px 0 0;
  }
`;

export const DeputyImageBox = styled(BaseRow)`
  flex: 1;
  margin: ${mainMargin};
`;

export const DeputyCredibilityBox = styled(BaseRow)`
  height: 200px;
  background-color: ${mainColor};
  flex: 1;
  padding: ${mainPadding};
  margin: ${mainMargin};
`;

export const DeputyTrendingBox = styled(BaseRow)`
  height: 200px;
  background-color: ${mainColor};
  flex: 1;
  padding: ${mainPadding};
  margin: ${mainMargin};
`;

export const DeputyActsVotedBox = styled(BaseRow)`
  
  background-color: ${mainColor};
  flex: 1;
  padding: ${mainPadding};
  margin: ${mainMargin};
  height: 200px;
`;

export const DeputyVotingsBox = styled(BaseRow)`
  
  background-color: ${mainColor};
  flex: 1;
  padding: ${mainPadding};
  margin: ${mainMargin};
  max-width: 280px;
  min-width: 280px;
  justify-content: center;
`;

export const DeputyAgreementWithClubsBox = styled(BaseRow)`

  background-color: ${mainColor};
  flex: 1;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 0;
  height: 90px;
  margin: ${mainMargin};
  max-width: 510px;
  display: flex;
  flex-wrap: wrap;
  min-width: 280px;
  justify-content: center;
  overflow: hidden;
`;

export const DeputyStatsAndInfoBox = styled(BaseRow)`

  height: 200px;
  background-color: ${mainColor};
  flex: 1;
  padding: ${mainPadding};
  margin: ${mainMargin};
`;

export const DeputyScandalBox = styled(BaseRow)`

  height: 200px;
  background-color: ${mainColor};
  flex: 1;
  padding: ${mainPadding};
  margin: ${mainMargin};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 280px;
  margin: ${mainMargin};
  ${DeputyAgreementWithClubsBox} ${DeputyBasicBox} {
    height: 80px;
  }
  @media (min-width: 768px) {
    .row {
      display: flex;
      width: 100%;
    }

    .first-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .second-row, .third-row {
      display: flex;

      justify-content: space-between;
      align-items: center;
    }

    ${DeputyImageBox} {
      flex: 0 0 auto;
    }
    
    ${DeputyCredibilityBox}, ${DeputyTrendingBox} {
      flex: 1 1 50%;
      margin-left: ${mainMargin};
    }

    ${DeputyVotingsBox}, ${DeputyAgreementWithClubsBox}, ${DeputyStatsAndInfoBox}, ${DeputyScandalBox} {
      flex: 1 1 50%;
      margin: ${mainMargin};
    }
  }
  @media (max-width: 965px) {
    .second-row {
      flex-direction: column;
      align-items: center;
    }
    ${DeputyVotingsBox}{
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .row {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    ${DeputyImageBox}, ${DeputyVotingsBox}, ${DeputyAgreementWithClubsBox} {
      width: auto;
    }

    ${DeputyCredibilityBox}, ${DeputyTrendingBox}, ${DeputyStatsAndInfoBox}, ${DeputyScandalBox}, ${DeputyActsVotedBox}{
      width: 100%;
    }
  }
  @media (max-width: 565px) {
    .row {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;