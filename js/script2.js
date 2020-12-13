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
        var myChart3 = echarts.init(document.getElementById('third'));
        var data3 = [];
        var app = {};
        option3 = null;
        myChart3.showLoading();

    //Gráfico por região
    $.getJSON('data/regiao.php').done(function (dados) {
        data3 = dados;
        const filtrados3 = data3.filter(dado =>{
            return dado.ano === anoRecebido;
    });
    console.log(filtrados3);

    myChart3.hideLoading();
        
    option3 = {
        title: {
            text: 'Quantidade de bolsas por região do Brasil',
            subtext: 'Dados obtidos em dados.gov.br/dataset/mec-prouni/',
            sublink: 'http://www.dados.gov.br/dataset/mec-prouni/',
            left: 'center'
        },
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            
                type: 'shadow'       
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Centro-Oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Quantidade',
                type: 'bar',
                barWidth: '70%',
                data: [filtrados3[0],filtrados3[1],filtrados3[2],filtrados3[3],filtrados3[4]]
            }
        ]
    };
    ;
        myChart3.setOption(option3, true);

});
    }