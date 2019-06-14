fetch('../output/olympicJsonObject.json')
   .then(json => json.json())
   .then(data => pieChartForNumberOfOlympicsHosted(data) );


   function pieChartForNumberOfOlympicsHosted(data) {
     let formattedData = Object.entries(data.olympicHostedPerCity).reduce((acc,item) => {
           acc.push({name: item[0], y : item[1]});
           return acc;
     },[]);
      

    Highcharts.chart('chartsVisual', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Olympics Hosted Per City'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data:  formattedData,
        }]
    });
   }

