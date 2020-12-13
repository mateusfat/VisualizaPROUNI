var myChart = echarts.init(document.getElementById('main'));
myChart.showLoading();

  $.getJSON('data/regiao.php').done(function (dados) {
    data3 = dados;
    console.log(data3);
    

    var app = {};
    option = null;
    
    
    app.config = {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15
    };
    
    
    var labelOption = {
        show: false,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    };

    option = {
        title: {
            text: 'Quantidade de bolsas por região do Brasil',
            subtext: 'Dados obtidos em dados.gov.br/dataset/mec-prouni/',
            sublink: 'http://www.dados.gov.br/dataset/mec-prouni/',
            left: 'center'
        },
        color: ['#313695', '#74add1', '#fdae61', '#d73027', '#a50026'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            top: 'bottom',
            data: ['Centro-Oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul']
        },
        toolbox: {
            show: false,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                data: ['2015', '2016', '2017', '2018', '2019']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Centro-Oeste',
                type: 'bar',
                barGap: 0,
                label: labelOption,
                data: [data3[0].value,data3[5].value,data3[10].value,data3[15].value,data3[20].value]
            },
            {
                name: 'Nordeste',
                type: 'bar',
                label: labelOption,
                data: [data3[1].value,data3[6].value,data3[11].value,data3[16].value,data3[21].value]
            },
            {
                name: 'Norte',
                type: 'bar',
                label: labelOption,
                data: [data3[2].value,data3[7].value,data3[12].value,data3[17].value,data3[22].value]
            },
            {
                name: 'Sudeste',
                type: 'bar',
                label: labelOption,
                data: [data3[3].value,data3[8].value,data3[13].value,data3[18].value,data3[23].value]
            },
            {
                name: 'Sul',
                type: 'bar',
                label: labelOption,
                data: [data3[4].value,data3[9].value,data3[14].value,data3[19].value,data3[24].value]
            }
        ]
    };
    myChart.hideLoading();
        myChart.setOption(option, true);
    
    }); 
