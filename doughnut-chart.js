const chartData = {
  labels: ["old", "new", "not"],
  data: [15, 50, 35],
};


   const myChart = document.querySelector(".my-chart");


new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        backgroundColor:[
        'rgb(182, 74, 180)',
        'rgb(89, 19, 146)' ,
        'rgb(228, 218, 235)',
        ],
        data: chartData.data,
        
      },
    ],
  },
  
  options: {
    borderWidth: 10,
    
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

