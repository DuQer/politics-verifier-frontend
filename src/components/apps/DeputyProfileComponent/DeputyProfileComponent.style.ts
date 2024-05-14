import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import styled from 'styled-components';

const mainMargin = '5px';
const mainPadding = '15px';
const mainColor = 'rgba(105, 105, 105, 0.5)'

export const DeputyImageBox = styled(BaseRow)`
height: 600px;
width: 450px;
margin: ${mainMargin};
`;


export const DeputyCredibilityBox = styled.div`
width: 1000px;
height: 100px;
padding ${mainPadding};
margin: ${mainMargin};
background-color: ${mainColor};
`;


export const DeputyTrendingBox = styled.div`
width: 800px;
height: 180px;
padding ${mainPadding};
margin: ${mainMargin} auto;
background-color: ${mainColor};
`;


export const DeputyBasicBox = styled.div`
width: 50px;
height: 50px;
margin: ${mainMargin};
background-color: green;
float: left;
text-align: center;
align-content: center;
color: white;
`;


export const DeputyVotingsBox = styled(BaseRow)`
width: auto;
padding ${mainPadding};
margin: ${mainMargin};
background-color: ${mainColor};
`;

export const DeputyAgreementWithClubsBox = styled(BaseRow)`
width: auto;
padding ${mainPadding};
margin: ${mainMargin};
background-color: ${mainColor};
`;


export const DeputyStatsBox = styled(BaseRow)`
width: 30%;
height: 200px;
padding ${mainPadding};
margin: ${mainMargin};
background-color: ${mainColor};
`;

export const DeputyScandalBox = styled(BaseRow)`
width: 65%;
height: 200px;
padding ${mainPadding};
margin: ${mainMargin};
background-color: ${mainColor};
`;


