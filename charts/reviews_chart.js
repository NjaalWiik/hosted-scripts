var options = {
  series: [
    {
      name: 'Review rate',
      data: [
        {
          x: 'Jan',
          y: 10
        },
        {
          x: 'Feb',
          y: 11
        },
        {
          x: 'Mar',
          y: 14
        },
        {
          x: 'Apr',
          y: 19
        },
        {
          x: 'May',
          y: 25
        },
        {
          x: 'Jun',
          y: 23
        },
        {
          x: 'Jul',
          y: 27
        },
        {
          x: 'Aug',
          y: 29
        },
        {
          x: 'Sep',
          y: 30
        },
        {
          x: 'Oct',
          y: 28
        },
        {
          x: 'Nov',
          y: 33
        },
        {
          x: 'Dec',
          y: 40
        }
      ]
    }
  ],
  chart: {
    type: 'area',
    height: '100%',
    zoom: {
      enabled: false
    }
  },
  colors: ['#407CDE'],
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'straight'
  },
  xaxis: {
    type: 'category',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    type: 'percentage',
    tickAmount: 4,
    floating: false,
    min: 0,
    labels: {
      formatter: value => value.toFixed(0) + '%',
      style: {
        colors: '#8e8da4'
      },
      offsetY: -7,
      offsetX: 0
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  fill: {
    opacity: 0.5
  },
  tooltip: {
    x: {
      format: 'string',
      show: false
    },
    fixed: {
      enabled: false,
      position: 'topRight'
    }
  },
  dataLabels: {
    formatter: value => value.toFixed(0) + '%'
  },
  grid: {
    yaxis: {
      lines: {
        offsetX: -30
      }
    },
    padding: {
      left: 20
    }
  }
};

var chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();
