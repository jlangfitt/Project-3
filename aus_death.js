var d1 ="https://raw.githubusercontent.com/jlangfitt/Project-3/master/covid_death.csv";
	
  Plotly.d3.csv(d1, function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    var t1 = {
      type: "scatter",
      mode: "lines",
      name: 'AMZN CLose',
      x: unpack(rows, 'Dates'),
      y: unpack(rows, 'Death'),
      line: {color: '#21A216'}
    }
   
    var data = [t1];
    var layout = {
      title: {
        text : 'Aus Death'
      },
      xaxis: {
        title : {
         text : 'Dates' 
        }
      } ,
      yaxis : {
        title : {
          text : 'Death'
        }
      }
    };    
    Plotly.newPlot('aus_chart', data, layout);
  })