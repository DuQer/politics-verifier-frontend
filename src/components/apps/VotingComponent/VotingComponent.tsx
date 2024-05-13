import { VotingBar } from './components/VotingBar/VotingBar';
import { useTranslation } from 'react-i18next';
import * as S from './VotingComponents.style';
import { PieChart } from '@app/components/apps/VotingComponent/components/PieChart/PieChart';

export const VotingComponent = () => {
  const { t } = useTranslation();
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <S.MainRow>
      <S.ChartColumn>
        <PieChart data={data} options={options}></PieChart>
      </S.ChartColumn>
      <S.StatsColumn>
        {Array.from({ length: 4 }).map((_, index, arr) => {
          return (
            <VotingBar key={index} quantity={arr.length}>
              Some example data about polish deputies votings
            </VotingBar>
          );
        })}
      </S.StatsColumn>
    </S.MainRow>
  );
};
