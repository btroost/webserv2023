/**  fl001 javascript **/


function drawChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  if (dataset.page == "page1"){
    document.writeln( "<h2> E Today: " + dataset.today.toFixed(2) + " kWh</h2>" );
    document.writeln( "<h2> E Total: " + dataset.total.toFixed(0) + " kWh</h2>" );
  }
    const mychart = {
    type: 'line',
    data: dataset.data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        }
      }
    },
  };
}
