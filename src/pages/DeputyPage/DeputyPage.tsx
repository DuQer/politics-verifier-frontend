import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { DeputyProfileComponent } from '@app/components/apps/DeputyProfileComponent/DeputyProfileComponent';

const DeputiesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      
      
          <DeputyProfileComponent
            // @todo implement object with all needed data for single deputy page, ex: name, img_src, surname, votesYes, ... 
            // deputyData = {name: Grzegorz, img_src: ...}
            first_name = "Grzegorz"
            second_name='Braun'
            img_src="https://api.sejm.gov.pl/sejm/term10/MP/34/photo"
            votesYes = "69"
            votesNo = "13"
            votesAbstain = "37"
            votesAbsent = "77"
          ></DeputyProfileComponent>
       
      
    </>
  );
};

export default DeputiesPage;
