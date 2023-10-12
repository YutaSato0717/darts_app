import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function Graph3() {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const data = {
      labels: ['10回前', '9回前', '8回前', '7回前', '6回前','5回前', '4回前', '3回前', '2回前', '1回前'],
      datasets: [
        {
          label: 'Score',
          data: [545,504,518,480,676,734,588,440,528,606],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          // チャートのタイプを折れ線グラフに変更
          type: 'line',
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    const config = {
      type: 'bar',
      data: data,
      options: options,
    };

    if (myChart) {
      myChart.destroy();
    }

    myChart = new Chart(ctx, config);

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} id="graph3Canvas" />;
}