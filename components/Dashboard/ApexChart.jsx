// components/ApexChart.jsx
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// قم بتحميل ApexCharts ديناميكيًا لمنع أخطاء SSR (Server-Side Rendering)
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApexChart = ({name,series,categories,type}) => {
  const [chartData] = useState({
    series: series,
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      colors:['var(--600-60)'],

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: name,
        style: {
          color:  'var(--400)'
        },
                align: 'left'
      },
      xaxis: {
        categories: categories,
      },
      yaxis: {
        opposite: false
      },
      legend: {
        horizontalAlign: 'left'
      }
    }
  });

  return (
    <div id="chart">
      <Chart options={chartData.options} series={chartData.series} type={type} height={350} />
    </div>
  );
}

export default ApexChart;
