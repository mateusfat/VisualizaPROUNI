<?php header('Content-Type: text/html; charset=UTF-8');

$mysql = new mysqli('localhost', 'root','' , 'prouni');
$mysql->set_charset('utf8');

$sql = 'SELECT COUNT(*) AS value, TIPO_BOLSA as name, ANO_CONCESSAO_BOLSA as ano FROM `dados` GROUP BY ANO_CONCESSAO_BOLSA,TIPO_BOLSA';

$data = $mysql->query($sql)->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);

?>