import React from 'react';
import { EChartsOption } from 'echarts-for-react';
import { BaseChart, BaseChartProps } from '@app/components/common/charts/BaseChart';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { themeObject } from '@app/styles/themes/themeVariables';
import { BASE_COLORS } from '@app/styles/themes/constants';
import { List } from 'echarts';

interface PieChartProps extends BaseChartProps {
  option?: EChartsOption;
  // eslint-disable-next-line
  data?: any;
  name?: string;
  showLegend?: boolean;
  rad?: List<string>;
}

export const PieChart: React.FC<PieChartProps> = ({ option, data, name, showLegend, rad, ...props }) => {
  const theme = useAppSelector((state) => state.theme.theme);

  const defaultPieOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      show: showLegend,
      left: 0,
      textStyle: {
        color: themeObject[theme].textMain,
      },
    },
    series: [
      {
        name,
        type: 'pie',
        top: '0%',
        bottom: '50%',
        radius: rad ?? ['55%', '100%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
          borderColor: BASE_COLORS.white,
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
            color: 'red',
          },
        },
        labelLine: {
          show: false,
        },
        data,
      },
    ],
  };
  return <BaseChart {...props} height="200px" option={{ ...defaultPieOption, ...option }} />;
};
