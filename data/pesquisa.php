<?php header('Content-Type: text/html; charset=UTF-8');

$mysql = new mysqli('localhost', 'root','' , 'prouni');
$mysql->set_charset('utf8');

$sql = 'SELECT ANO_CONCESSAO_BOLSA as ano, NOME_IES_BOLSA as nome, COUNT(*) AS quantidade,REGIAO_BENEFICIARIO_BOLSA as regiao, SIGLA_UF_BENEFICIARIO_BOLSA as estado FROM dados GROUP BY ANO_CONCESSAO_BOLSA';

$data = $mysql->query($sql)->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);

?>