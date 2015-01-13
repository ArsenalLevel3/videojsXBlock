var myChart = echarts.init(document.getElementById('main'));         
var option = {
            tooltip: {
                show: true
            },
            legend: {
                data:['nums']
            },
            xAxis : [
                {
                    type : 'category',
                    data : ["clothes 1","clothes 2","clothes 3","clothes 4","clothes 5","clothes 6"]
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    "name":"nums",
                    "type":"bar",
                    "data":[5, 20, 40, 10, 10, 20]
                }
            ]
};
myChart.setOption(option); 
 
