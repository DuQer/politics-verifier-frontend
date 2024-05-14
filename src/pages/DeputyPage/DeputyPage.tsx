import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { DeputyProfileComponent } from '@app/components/apps/DeputyProfileComponent/DeputyProfileComponent';

const DeputiesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      
      <BaseCol>
        <BaseRow>
          <DeputyProfileComponent
            // @todo implement object with all needed data for single deputy page, ex: name, img_src, surname, votesYes, ... 
            // deputyData = {name: Grzegorz, img_src: ...}
            firstName = "Grzegorz"
            img_src="https://ocdn.eu/pulscms-transforms/1/yoPk9kpTURBXy9lZDgwM2Q5ZGM1NTQ5MGFhZjM0NGEyMmYwMDhhNWI3Ni5qcGeSlQMAzFPNB9DNBGWTBc0DmM0BzN4AAqEwBqExAQ"
            votesYes = "69"
            votesNo = "13"
            votesAbstain = "37"
            votesAbsent = "77"
          ></DeputyProfileComponent>
        </BaseRow>
      </BaseCol>
      
    </>
  );
};

export default DeputiesPage;
