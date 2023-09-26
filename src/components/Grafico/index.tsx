import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { StyledChartContainer } from './styles'

function Grafico() {
  const series = [20, 5, 20, 15, 40]
  const options: ApexOptions = {
    labels: [
      'Hugo Silva',
      'Calos Moura',
      'Eliza Souza',
      'Fernanda Oliveira',
      'Anderson Santos',
    ],
    colors: ['#2c96dd', '#15ba9a', '#9c56b8', '#b2b4b4', '#e94b35'],
    chart: {
      background: '#fff',
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + '%'
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50%',
        },
        expandOnClick: false,
      },
    },
    legend: {
      labels: {
        useSeriesColors: true,
      },
      fontWeight: '600',
      fontSize: '15',
      itemMargin: {
        vertical: 6,
      },
      markers: {
        width: 25,
        height: 25,
        radius: 5,
        offsetY: 8,
        offsetX: -7,
      },
    },
  }

  return (
    <StyledChartContainer>
      <ReactApexChart options={options} series={series} type="donut" />
    </StyledChartContainer>
  )
}

export default Grafico
