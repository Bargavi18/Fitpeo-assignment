const ctx = document.getElementById('barchart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label:'',
      data: [60, 50, 90, 70, 80, 45, 80, 100, 90, 80, 85, 80],
      backgroundColor: [
        'rgb(228, 218, 235)',
        'rgb(228, 218, 235)',
        'rgb(228, 218, 235)',
        'rgb(228, 218, 235)',
        'rgb(228, 218, 235)',
        'rgb(228, 218, 235)',
        'rgb(228, 218, 235)',
        'rgb(89, 19, 146)',
        'rgb(228, 218, 235)',
        'rgb(228, 218, 235)',
        'rgb(228, 218, 235)',
        'rgb(228, 218, 235)',
    
      ],

      borderWidth: 1,
      borderRadius:10,
      borderSkipped:false
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks:{
          display:false
        },
        grid:{
          drawTicks:false,
          drawOnChartArea:false,
        }
      },
      x:{
        grid:{
          drawOnChartArea:false,
          display:false
        }
      }
    },
    plugins:{
      legend:{
        labels:{
          boxWidth:0
        }
      }
    }

  }
});
