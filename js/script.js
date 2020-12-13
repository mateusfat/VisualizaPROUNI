window.addEventListener('load',start);

function start(){
    selecionaAno();
}

    
    function selecionaAno(){
     var selectAno = document.querySelectorAll('#formAno');
     var anoItems = [].slice.call(selectAno);
     anoItems.forEach(function (item, idx) {
        item.addEventListener('change',mudaAno);
    });
    }

    function mudaAno(ano){
        anoRecebido = ano.target.value;
        var textAno = document.querySelector('#anoDados');
        textAno.textContent = `Dados de ${anoRecebido}`;
        geraGrafico(anoRecebido);
    }

    function geraGrafico(anoRecebido){
        var myChart = echarts.init(document.getElementById('primeiro'));
        var myChart2 = echarts.init(document.getElementById('segundo'));
        var data = [];
        var data2 = [];
        var app = {};
        option2 = null;
        myChart.showLoading();
        myChart2.showLoading();

        //Gráfico pizza proporções
        $.getJSON('data/tipo.php').done(function (dados) {
            data2 = dados;
            const filtrados2 = data2.filter(dado =>{
                return dado.ano === anoRecebido;
        });
        console.log(filtrados2);

        for (var i=0; i < dados.length; i++){
    
            if (dados[i].name == "AC"){
                dados[i].name = 'Acre';
            }
            if (dados[i].name == "AL"){
                dados[i].name = 'Alagoas';
            }
            if (dados[i].name == "AM"){
                dados[i].name = 'Amazonas';
            }
            if (dados[i].name == "AP"){
                dados[i].name = 'Amapá';
            }
            if (dados[i].name == "BA"){
                dados[i].name = 'Bahia';
            }
            if (dados[i].name == "CE"){
                dados[i].name = 'Ceará';
            }
            if (dados[i].name == "DF"){
                dados[i].name = 'DF';
            }
            if (dados[i].name == "ES"){
                dados[i].name = 'Espírito Santo';
            }
            if (dados[i].name == "GO"){
                dados[i].name = 'Goiás';
            }
            if (dados[i].name == "MA"){
                dados[i].name = 'Maranhão';
            }
            if (dados[i].name == "MG"){
                dados[i].name = 'Minas Gerais';
            }
            if (dados[i].name == "MS"){
                dados[i].name = 'Mato Grosso do Sul';
            }
            if (dados[i].name == "MT"){
                dados[i].name = 'Mato Grosso';
            }
            if (dados[i].name == "PA"){
                dados[i].name = 'Pará';
            }
            if (dados[i].name == "PB"){
                dados[i].name = 'Paraíba';
            }
            if (dados[i].name == "PE"){
                dados[i].name = 'Pernambuco';
            }
            if (dados[i].name == "PI"){
                dados[i].name = 'Piauí';
            }
            if (dados[i].name == "PR"){
                dados[i].name = 'Paraná';
            }
            if (dados[i].name == "RJ"){
                dados[i].name = 'Rio de Janeiro';
            }
            if (dados[i].name == "RN"){
                dados[i].name = 'Rio Grande do Norte';
            }
            if (dados[i].name == "RO"){
                dados[i].name = 'Rondônia';
            }
            if (dados[i].name == "RR"){
                dados[i].name = 'Roraima';
            }
            if (dados[i].name == "RS"){
                dados[i].name = 'Rio Grande do Sul';
            }
            if (dados[i].name == "SC"){
                dados[i].name = 'Santa Catarina';
            }
            if (dados[i].name == "SE"){
                dados[i].name = 'Sergipe';
            }
            if (dados[i].name == "SP"){
                dados[i].name = 'São Paulo';
            }
            if (dados[i].name == "TO"){
                dados[i].name = 'Tocantins';
            }
            
        } 
        myChart2.hideLoading();

        option2 = {
            title: {
                text: 'Proporção de bolsas Integrais e Parciais no Brasil',
                subtext: 'Dados obtidos em dados.gov.br/dataset/mec-prouni/',
                sublink: 'http://www.dados.gov.br/dataset/mec-prouni/',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['Integral', 'Parcial']
            },
            series: [
                {
                    name: 'Quantidade e proporção das bolsas no país',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: filtrados2,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart2.setOption(option2);
    });

        //Gráfico GeoMap
        $.get('data/brazil_geo.js', function (geoJson) {
            $.getJSON('data/data.php').done(function (dados) {
            data = dados;
            const filtrados = data.filter(dado =>{
                    return dado.ano === anoRecebido;
            });
            console.log(filtrados);
            for (var i=0; i < dados.length; i++){
    
            if (dados[i].name == "AC"){
                dados[i].name = 'Acre';
            }
            if (dados[i].name == "AL"){
                dados[i].name = 'Alagoas';
            }
            if (dados[i].name == "AM"){
                dados[i].name = 'Amazonas';
            }
            if (dados[i].name == "AP"){
                dados[i].name = 'Amapá';
            }
            if (dados[i].name == "BA"){
                dados[i].name = 'Bahia';
            }
            if (dados[i].name == "CE"){
                dados[i].name = 'Ceará';
            }
            if (dados[i].name == "DF"){
                dados[i].name = 'DF';
            }
            if (dados[i].name == "ES"){
                dados[i].name = 'Espírito Santo';
            }
            if (dados[i].name == "GO"){
                dados[i].name = 'Goiás';
            }
            if (dados[i].name == "MA"){
                dados[i].name = 'Maranhão';
            }
            if (dados[i].name == "MG"){
                dados[i].name = 'Minas Gerais';
            }
            if (dados[i].name == "MS"){
                dados[i].name = 'Mato Grosso do Sul';
            }
            if (dados[i].name == "MT"){
                dados[i].name = 'Mato Grosso';
            }
            if (dados[i].name == "PA"){
                dados[i].name = 'Pará';
            }
            if (dados[i].name == "PB"){
                dados[i].name = 'Paraíba';
            }
            if (dados[i].name == "PE"){
                dados[i].name = 'Pernambuco';
            }
            if (dados[i].name == "PI"){
                dados[i].name = 'Piauí';
            }
            if (dados[i].name == "PR"){
                dados[i].name = 'Paraná';
            }
            if (dados[i].name == "RJ"){
                dados[i].name = 'Rio de Janeiro';
            }
            if (dados[i].name == "RN"){
                dados[i].name = 'Rio Grande do Norte';
            }
            if (dados[i].name == "RO"){
                dados[i].name = 'Rondônia';
            }
            if (dados[i].name == "RR"){
                dados[i].name = 'Roraima';
            }
            if (dados[i].name == "RS"){
                dados[i].name = 'Rio Grande do Sul';
            }
            if (dados[i].name == "SC"){
                dados[i].name = 'Santa Catarina';
            }
            if (dados[i].name == "SE"){
                dados[i].name = 'Sergipe';
            }
            if (dados[i].name == "SP"){
                dados[i].name = 'São Paulo';
            }
            if (dados[i].name == "TO"){
                dados[i].name = 'Tocantins';
            }
            
        } 


        myChart.hideLoading();

        echarts.registerMap('Brasil', geoJson);
            option = {
            title: {
                text: 'Brasil - Número de bolsas PROUNI por estado',
                subtext: 'Dados obtidos em dados.gov.br/dataset/mec-prouni/',
                sublink: 'http://www.dados.gov.br/dataset/mec-prouni/',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                showDelay: 0,
                transitionDuration: 0.2,
                formatter: function (params) {
                    var value = (params.value + '').split('.');
                    value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                    return 'Número de Bolsas PROUNI:' + '<br/>' + params.name + ': ' + value;
                }
            },
            visualMap: {
                left: 'right',
                min: 300,
                max: 61000,
                inRange: {
                    color: ['#52569F', '#74ADD1', '#DFB277', '#D73027', '#A50026']
                },
                text: ['Maior', 'Menor'],          
                calculable: true
            },
            toolbox: {
                show: false,
                orient: 'vertical',
                left: 'left',
                top: 'top',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            series : [
                {
                    name: 'Brasil',
                    type: 'map',
                    roam: true,
                    map: 'Brasil',
                    itemStyle:{
                        emphasis:{label:{show:true}}
                    },
                    textFixed : {
                    },
                    data: filtrados
                }
            ]
        };
        myChart.setOption(option);
    });
    });
}