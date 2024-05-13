import React from 'react';
import { useTranslation } from 'react-i18next';
import { GradientStackedAreaChart } from '@app/components/charts/GradientStackedAreaChart/GradientStackedAreaChart';
import { BarAnimationDelayChart } from '@app/components/charts/BarAnimationDelayChart/BarAnimationDelayChart';
import { ScatterChart } from '@app/components/charts/ScatterChart/ScatterChart';
import { LineRaceChart } from '@app/components/charts/LineRaceChart/LineRaceChart';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { DeputyCardComponent } from '@app/components/apps/DeputyCardComponent/DeputyCardComponent';

const DeputiesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.deputies')}</PageTitle>
      <BaseRow gutter={[30, 30]}>
        <DeputyCardComponent
          club="Prawo i Sprawiedliwość"
          name="Jarosław Kaczyński"
          img_src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Jaros%C5%82aw_Kaczy%C5%84ski%2C_15_March_2022_%28cropped%29.jpg/800px-Jaros%C5%82aw_Kaczy%C5%84ski%2C_15_March_2022_%28cropped%29.jpg"
        ></DeputyCardComponent>
        <DeputyCardComponent
          club="Konfederacja"
          name="Grzegorz Braun"
          img_src="https://ocdn.eu/pulscms-transforms/1/yoPk9kpTURBXy9lZDgwM2Q5ZGM1NTQ5MGFhZjM0NGEyMmYwMDhhNWI3Ni5qcGeSlQMAzFPNB9DNBGWTBc0DmM0BzN4AAqEwBqExAQ"
        ></DeputyCardComponent>
      </BaseRow>
    </>
  );
};

export default DeputiesPage;
