<?php header('Content-Type: text/html; charset=UTF-8');

$mysql = new mysqli('localhost', 'root','' , 'prouni');
$mysql->set_charset('utf8');

$sql = 'SELECT SIGLA_UF_BENEFICIARIO_BOLSA AS name, COUNT(*) AS value, ANO_CONCESSAO_BOLSA as ano,TIPO_BOLSA as tipo FROM `dados` GROUP BY 
SIGLA_UF_BENEFICIARIO_BOLSA,ANO_CONCESSAO_BOLSA,TIPO_BOLSA';

$data = $mysql->query($sql)->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);

?>