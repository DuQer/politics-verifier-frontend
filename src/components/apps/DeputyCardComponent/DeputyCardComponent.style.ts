import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import styled from 'styled-components';

export const Card = styled(BaseRow)`
border: 2px solid white;
border-radius: 3px;
height: 200px;
width: 150px;
justify-content: left;
justify-items: left;
align-items: center;
margin: 5px;
transition: opacity 0.3s;

&:hover {
    opacity: 0.75;
}
`;

export const Popup = styled.div`
  display: flex;
  position: absolute;
  transform: translateX(-50%);
  width: auto;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: white;
  border: 1px solid lightblue;
  padding: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  pointer-events: none;
  border: lightblue;
  text-align: center;
  align-content: center;
`;

export const NamePanel = styled(BaseRow)`
  width: 100%;
  height: 50px;
  margin-top: -50px;
  justify-content: center;
  justify-items: center;
`;

export const Name = styled(BaseRow)`
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  justify-content: center;
  justify-items: center;
  text-align: left;
  padding-left: 5px;
  align-content: center;
  flex: 1.8;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  pointer-events: none;
  padding-left: 4px;
`;

export const Logo = styled(BaseRow)`
  justify-content: center;
  justify-items: center;
  text-align: left;
  padding-left: 5px;
  align-content: center;
  flex: 1;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  pointer-events: none;
  padding: 0px;
  margin-right: 0px;
  justify-content: center;
  justify-items: center;
`;