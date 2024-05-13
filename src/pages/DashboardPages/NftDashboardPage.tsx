import React from 'react';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './DashboardPage.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { VotingComponent } from '@app/components/apps/VotingComponent/VotingComponent';
import { DeputyCardComponent } from '@app/components/apps/DeputyCardComponent/DeputyCardComponent';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

const MedicalDashboardPage: React.FC = () => {
  const { isDesktop } = useResponsive();

  const desktopLayout = (
    <BaseRow>
      <S.LeftSideCol xl={16} xxl={17} id="desktop-content">
        <BaseRow gutter={[60, 60]}></BaseRow>
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={7}>
        <S.Space />
        <S.Space />
      </S.RightSideCol>
    </BaseRow>
  );

  const mobileAndTabletLayout = <BaseRow gutter={[20, 24]}></BaseRow>;

  return (
    <>
      <PageTitle>Politics Verifier</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
      <VotingComponent></VotingComponent>
    </>
  );
};

export default MedicalDashboardPage;
