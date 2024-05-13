import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import styled from 'styled-components';

export const Bar = styled(BaseRow)`
  border: 1px solid lightblue;
  flex: 1;
  justify-content: space-between;
`;

export const BlackSquare = styled(BaseCol)`
  flex: 0.05;
  border: 1px solid lightblue;
`;

export const ContentRow = styled(BaseRow)`
  flex: 0.9;
  justify-content: center;
  align-items: center;
`;