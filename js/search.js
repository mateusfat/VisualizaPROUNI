window.addEventListener('load',start);

function start(){
    preventFormSubmit();
    pesquisa();
}

function preventFormSubmit(){

    function handleFormSubmit(event){
        event.preventDefault();
    }

    var form=document.querySelector('#formBusca');
    form.addEventListener('submit',handleFormSubmit);
}

function pesquisa(){
    var campoPesquisa = document.querySelector('#busca');
    campoPesquisa.addEventListener('change', mudaPagina);
}

function mudaPagina(campo){
    pesquisaRecebida = campo.target.value;
    var esquerdo = document.getElementById('esquerdo');
    var direito = document.getElementById('direito');
     var data = [];
     option = null;

    $.getJSON('data/tipo_pesquisa.php').done(function (dados) {
        data = dados;
        const filtrados = data.filter(dado =>{
            var pesquisaRecebidaUpperCase = pesquisaRecebida.toUpperCase();
            return dado.ies === pesquisaRecebidaUpperCase;
    });
        if(filtrados.length > 0){
            somaQuantidade = parseInt(filtrados[0].value) + parseInt(filtrados[0].value);
            direito.style.heigth = "50px";
            direito.style.width = "500px";
            direito.innerHTML += "<br><div>Total de bolsas da instituição " + pesquisaRecebida + " distribuidas nos últimos cinco anos: " + (somaQuantidade) +"</div>";

            var myChart = echarts.init(esquerdo);
            myChart.showLoading();
            console.log(filtrados);
            option = {
                title: {
                    text: 'Proporção de bolsas Integrais e Parciais',
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
                        data: filtrados,
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
            myChart.hideLoading();
            myChart.setOption(option);
        

        }else{
            
            conteudo.innerHTML = "<br><div>Nenhuma instituição de ensino com esse nome encontrada.</div>";
        }
    }); 

}
