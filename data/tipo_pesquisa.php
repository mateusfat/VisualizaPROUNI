<?php header('Content-Type: text/html; charset=UTF-8');

$mysql = new mysqli('localhost', 'root','' , 'prouni');
$mysql->set_charset('utf8');

$sql = 'SELECT COUNT(*) AS value, TIPO_BOLSA as name, NOME_IES_BOLSA as ies, ANO_CONCESSAO_BOLSA as ano FROM `dados` GROUP BY NOME_IES_BOLSA,TIPO_BOLSA';

$data = $mysql->query($sql)->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);

?>