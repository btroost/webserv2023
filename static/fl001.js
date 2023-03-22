/**  fl001 javascript **/


function drawChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  if (dataset.page == "page1"){
    document.writeln( "<h2> E Today: " + dataset.today.toFixed(2) + " kWh</h2>" );
    document.writeln( "<h2> E Total: " + dataset.total.toFixed(0) + " kWh</h2>" );
  }
  
  var myChart = new Chart(ctx, {
    type: dataset.type,
    data: {
          labels : dataset.labels,
          datasets: [{
            label           : dataset.name,
            data            : dataset.data ,
            backgroundColor : 'rgba(255, 159, 64, 0.8)',
            borderColor: ['rgba(255, 159, 64, 1)'],
            borderWidth: 1
          }]
      },
      options: {
          responsive:false,
          maintainAspectRatio: true,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          },
          layout: {
            padding: 0
          }
          
      }
  });

}
