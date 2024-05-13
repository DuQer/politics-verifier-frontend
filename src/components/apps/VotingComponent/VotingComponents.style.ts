import styled from 'styled-components';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

export const ChartColumn = styled(BaseCol)`
  flex: 0.3;
  height: 100%;
  border: 1px solid lightblue;
  max-width: 150px;
  align-content: center;
`;

export const StatsColumn = styled(BaseCol)`
  flex: 1;
  height: 100%;
  border: 1px solid lightblue;
`;

export const MainRow = styled(BaseRow)`
  justify-content: stretch;
  align-items: center;
  height: 400px;
  border: 1px solid lightblue;
  margin: 15px;
`;