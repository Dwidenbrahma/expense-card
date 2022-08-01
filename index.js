const barChart = document.getElementById("barChart");
var xAxis = ["mon", "tue", "wed","thu", "fri", "sat", "sun"];
var yValues = [17.45, 34.91, 52.36, 31.07,  23.39, 43.28, 25.48]
var barColor = ["hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)","hsl(186, 34%, 60%)","hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)"]

Chart.defaults.global.legend.display = false;
new Chart("barChart", {
    type: "bar",
    data: {
      labels: xAxis,
      datasets: [{
        backgroundColor: barColor,
        data: yValues,
       
      }],
    },
    options: {
        responsive: true,     
      scales: {
          yAxes: [{
              ticks: {
                  display: false,
                  drawBorder: true
              },
            gridLines: {
                  color: "#fff"
              },
         
          }],
         xAxes: [{
          
              gridLines: {
                  display: false
              }
          }],
         
      },
      plugins:{
        tooltip:{
            yAlign: 'bottom',
            displayColor: false

        }
      }
   
  }
  
  });

