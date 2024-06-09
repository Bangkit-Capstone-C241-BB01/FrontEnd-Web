import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!data || !data.dashboard || data.dashboard.length === 0) {
      return;
    }

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    const blurCount = data.dashboard.filter((item) => item.img_quality.trim().toLowerCase() === "blur").length;
    const bokehCount = data.dashboard.filter((item) => item.img_quality.trim().toLowerCase() === "bokeh").length;
    const normalCount = data.dashboard.filter((item) => item.img_quality.trim().toLowerCase() === "normal").length;

    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [`${blurCount} Blur`, `${bokehCount} Bokeh`, `${normalCount} Normal`],
        datasets: [
          {
            label: "Image Quality",
            data: [blurCount, bokehCount, normalCount],
            backgroundColor: ["rgba(255, 0, 0, 0.7)", "rgba(255, 255, 0, 0.7)", "rgba(0, 128, 0, 0.7)"],
            borderColor: ["rgba(255, 0, 0, 1)", "rgba(255, 255, 0, 1)", "rgba(0, 128, 0, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: false,
        plugins: {
          legend: {
            position: "right",
            labels: {
              font: {
                size: 25,
                color: "black",
              },
            },
          },
          title: {
            display: true,
            text: "Image Quality Distribution",
            font: {
              size: 30,
              weight: "bold",
              color: "black",
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} width={400} height={400} />;
};

export default PieChart;
